var express = require("express");
var router = express.Router();
const linkController = require("../controllers/links.controller");

/* GET home page. */
router.get("/", linkController.index);
router.post("/", linkController.handleLink);
router.get("/:shortCode", linkController.handleShortCode);
router.post("/:shortCode", linkController.handleVerifyPassword);

module.exports = router;
