var express = require("express");
var router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");

/* GET home page. */
router.get("/", authMiddleware, function (req, res, next) {
  res.render("index", { req });
});

module.exports = router;
