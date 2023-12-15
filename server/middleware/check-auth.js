const jwt = require('jsonwebtoken');

const auth = () => {
  return (req, res, next) => {
    console.log(req.headers);
    console.log(req.headers?.authorization);
    const token = req.headers?.authorization?.split(' ')[1];

    try {
      if (!token) {
        throw new Error('A token is required for authentication');
      }

      const decoded = jwt.verify(token, process.env.TOKEN_KEY);
      req.user = decoded;

      return next();
    } catch (error) {
      if (error.message === 'invalid signature') {
        error.message = 'Invalid Token';
        error.status = 401;
      }

      if (error.message === 'A token is required for authentication') {
        error.status = 403;
      }

      return next(error);
    }
  };
};

module.exports = auth;
