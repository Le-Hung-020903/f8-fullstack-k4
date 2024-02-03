var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { req });
});
router.get("/", (req, res) => {
  if (!req.isAuthenticated()) {
    return res.redirect("/auth/login");
  }
  return res.render("/", { req });
});

module.exports = router;
