var express = require("express");
var router = express.Router();
const authController = require("../controllers/auth.controller");
const authMiddleware = require("../middlewares/auth.middleware");

router.get("/", authController.index);
router.get("/login", authController.login);
router.post("/login", authController.handleLogin);
router.get("/register", authController.register);
router.post("/register", authController.handleRegister);
router.get("/logout", authMiddleware, authController.logout);
router.get("/changePassword", authController.changePassword);
router.post("/changePassword", authController.handleChangePassword);

module.exports = router;
