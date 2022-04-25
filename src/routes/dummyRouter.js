const express = require("express");
const dummyController = require("../controller/dummyController");
const router = express.Router();

router.route("/").get(dummyController.indexController);

module.exports = router;
