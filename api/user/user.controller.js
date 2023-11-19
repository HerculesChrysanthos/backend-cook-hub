const User = require('./user.model');

async function login(req, res, next) {
  try {
    //const email = req.body.email;
    //const password = req.body.password;

    //const dbUser = await userService.login(email, password);

    //const response = userHelper.buildUserResponse(dbUser);

    const us = await User.find({ name: 'a' });

    return res.status(200).json(us);
  } catch (error) {
    if (error.message === 'User not found') {
      error.status = 404;
    }

    if (error.message === 'Invalid password') {
      error.status = 401;
    }

    return next(error);
  }
}

module.exports = {
  login,
};
