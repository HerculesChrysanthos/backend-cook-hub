const express = require('express');
const timeout = require('express-timeout-handler');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const userRouter = require('./server/api/user/user.router');
const categoryRouter = require('./server/api/category/category.router');
const subcategoryRouter = require('./server/api/subcategory/subcategory.router');
const recipeRouter = require('./server/api/recipe/recipe.router');
const tagRouter = require('./server/api/tag/tag.router');

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(
  'mongodb+srv://cookhub2023:' +
    process.env.MONGO_ATLAS_PASS +
    '@cluster0.ihgxjrg.mongodb.net/cook-hub?retryWrites=true&w=majority'
);

//mongoose.set('debug', true);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Tpe, Accept, Authorization'
  );
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json();
  }
  next();
});

app.use(
  timeout.handler({
    timeout: 15000, // 15 seconds in milliseconds
    onTimeout: function (req, res, next) {
      const error = new Error('Request Timeout');
      error.status = 408;
      next(error);
    },
  })
);

app.use('/api/users', userRouter);
app.use('/api/categories', categoryRouter);
app.use('/api/subcategories', subcategoryRouter);
app.use('/api/recipes', recipeRouter);
app.use('/api/tags', tagRouter);

app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  console.log(error);

  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
