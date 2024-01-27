var express = require("express");
var router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");
const authController = require("../controllers/auth.controller");

/* GET home page. */
router.get("/", authMiddleware, function (req, res, next) {
  res.render("index", { req });
});
router.get("/infoBrowser", authMiddleware, authController.device);

module.exports = router;
