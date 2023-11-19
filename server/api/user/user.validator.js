const Joi = require('joi');

const registerSchema = Joi.object({
  body: Joi.object({
    name: Joi.string().lowercase().required(),
    surname: Joi.string().lowercase().required(),
    email: Joi.string().email().lowercase().required(),
    // password: Joi.string().min(8).max(16).required().label('password'),
    password: Joi.string().min(8).max(16).required(),
    passwordConfirmation: Joi.any()
      .equal(Joi.ref('password'))
      .required()
      //.label('Confirm password')
      .messages({ 'any.only': '{{#label}} does not match' }),
  }).required(),
});

module.exports = {
  registerSchema,
};
