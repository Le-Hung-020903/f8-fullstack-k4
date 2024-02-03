var express = require("express");
var router = express.Router();
const passport = require("passport");
const authController = require("../controllers/auth.controller");

router.get("/login", authController.login);
router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/auth/login",
    failureFlash: true,
    successRedirect: "/",
  })
);
router.get("/logout", (req, res) => {
  req.logout((error) => {
    if (!error) {
      return res.redirect("/auth/login");
    }
  });
});
router.get("/google", passport.authenticate("google"));
router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureFlash: true,
    failureRedirect: "auth/login",
    successRedirect: "/",
  }),
  (req, res) => {
    res.redirect("/");
  }
);

router.get("/forgotPassword", authController.forgotPassword);
router.post("/forgotPassword", authController.handleForgotPassword);
router.get("/reset-password", authController.resetPassword);
router.post("/reset-password", authController.handleResetPassword);
module.exports = router;
