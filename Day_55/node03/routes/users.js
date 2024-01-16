var express = require("express");
var router = express.Router();
const userController = require("../controllers/user.controller");

/* GET users listing. */
router.get("/", userController.index);
router.get("/add", userController.add);
router.post("/add", userController.handleAdd);
router.get("/edit/:id", userController.edit);
router.post("/edit/:id", userController.handleEdit);
router.get("/delete/:id", userController.delete);
router.post("/delete/:id", userController.handleDelete);
module.exports = router;
