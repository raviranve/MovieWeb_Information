const user = require("./user_schema");

module.exports = {
  registerUserValidation: async (req, res, next) => {
    const value = await user.registerUser.validate(req.body, {
      abortEarly: false,
    });

    if (value.error) {
      res.json({
        success: false,
        message: value.error.details[0].message,
      });
    } else {
      next();
    }
  },

  userLoginValidation: async (req, res, next) => {
    const value = await user.loginUser.validate(req.body, {
      abortEarly: false,
    });

    if (value.error) {
      res.json({
        success: false,
        message: value.error.details[0].message,
      });
    } else {
      next();
    }
  },
};
