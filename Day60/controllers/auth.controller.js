const { User } = require("../models/index");
const { Op } = require("sequelize");
const md5 = require("md5");
const bcrypt = require("bcrypt");
const sendMail = require("../utils/mail");
module.exports = {
  login: (req, res, next) => {
    if (req.user) {
      return res.redirect("/");
    }
    const error = req.flash("error");
    res.render("auth/login", { error });
  },
  forgotPassword: (req, res) => {
    const success = req.flash("success");
    const error = req.flash("error");
    res.render("auth/forgotPassword", { success, error });
  },
  handleForgotPassword: async (req, res) => {
    try {
      const { email } = req.body;
      const user = await User.findOne({ where: { email } });
      if (!user) {
        req.flash("error", "No user found with that email");
        return res.redirect("/auth/forgotPassword");
      }
      const token = md5(Math.random() + new Date().getTime());
      const resetUrl =
        req.protocol +
        "://" +
        req.get("host") +
        `/auth/reset-password?token=${token}`;
      await sendMail(
        email,
        "Reset your password",
        `<a href="${resetUrl}">Nhấn vào đây để đổi mật khẩu</a>`
      );
      const fifteenMinutes = 1000 * 60 * 15;
      user.reset_token = token;
      user.expired_token = new Date(Date.now() + fifteenMinutes);
      await user.save();
      req.flash("success", "An email has been sent to your email");
      return res.redirect("/auth/forgotPassword");
    } catch (err) {
      req.flash("error", err.message);
      return res.redirect("/auth/forgotPassword");
    }
  },
  resetPassword: async (req, res) => {
    const token = req.query.token;
    if (!token) {
      req.flash("error", "No token provided");
      return res.redirect("/auth/forgotPassword");
    }
    const user = await User.findOne({
      where: {
        reset_token: token,
        expired_token: {
          [Op.gt]: new Date(),
        },
      },
    });
    if (!user) {
      req.flash("error", "Invalid token or expired token");
      return res.redirect("/auth/forgotPassword");
    }
    req.userId = user.id;
    const success = req.flash("success");
    const error = req.flash("error");
    res.render("auth/reset-password", { success, error });
  },
  handleResetPassword: async (req, res) => {
    try {
      const user = await User.findOne({
        where: { reset_token: req.query.token },
      });
      console.log(user);
      const { newPassword } = req.body;
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(newPassword, salt);
      user.password = hashedPassword;
      await user.save();
      return res.redirect("/auth/login");
    } catch (e) {
      req.flash("error", e.message);
      return res.redirect("/auth/reset-password");
    }
  },
};
