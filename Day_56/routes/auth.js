var express = require("express");
var router = express.Router();
const authController = require("../controllers/auth.controller");

/* GET users listing. */
router.get("/login", authController.login);
router.post("/login", authController.handleLogin);
router.get("/resgister", authController.resgister);
router.post("/resgister", authController.handleResgister);

module.exports = router;
