var express = require("express");
var router = express.Router();
const emailController = require("../controllers/email.controller");

router.get("/email", emailController.email);
router.post("/email", emailController.handleEmail);
router.get("/historyEmail", emailController.history);
router.get("/contentEmail/:id", emailController.content);

module.exports = router;
