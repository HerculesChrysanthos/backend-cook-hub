function errorMessage(message) {
  return message.replace(/"([^"]*)"/g, '').trim();
}

const validator = (schema, property) => {
  return (req, res, next) => {
    const data = {};

    if (req.body && Object.keys(req.body).length > 0) {
      data.body = req.body;
    }

    if (req.query && Object.keys(req.query).length > 0) {
      data.query = req.query;
    }

    if (req.params && Object.keys(req.params).length > 0) {
      data.params = req.params;
    }

    if (req.files) {
      data.image = req.files.map((file) => file.buffer);
    }

    const { error } = schema.validate(data);

    const valid = error == null;

    if (valid) {
      next();
    } else {
      const { details } = error;

      const validationErrors = details.map((detail) => ({
        message: errorMessage(detail.message),
        path: detail.path.join('.'),
        limit: detail.context?.limit,
      }));

      console.error('Validation errors:', validationErrors);

      res.status(422).json({ errors: validationErrors });
    }
  };
};

module.exports = {
  validator,
};
