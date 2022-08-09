const express = require("express");
const dummyController = require("../controllers/dummyController");
const router = express.Router();

router.route("/").get(dummyController.indexController);

module.exports = router;
