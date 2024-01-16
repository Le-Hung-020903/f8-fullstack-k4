// tiếp nhận các request
// Validate --> Rule --> thông qua action của controller
// error
// flash
const e = require("connect-flash");
const { object } = require("yup");

module.exports = (req, res, next) => {
  req.validate = async (data, rules = {}) => {
    const schema = object(rules);
    try {
      const body = await schema.validate(data, {
        abortEarly: false,
      });
      return body;
    } catch (err) {
      const errors = Object.fromEntries(
        err.inner.map((item) => [item.path, item.message])
      );
      req.flash("errors", errors);
      req.flash("old", data);
    }
  };
  const errors = req.flash("errors");
  req.errors = errors.length ? errors[0] : {};
  const old = req.flash("old");
  req.old = old.length ? old[0] : {};
  next();
};
