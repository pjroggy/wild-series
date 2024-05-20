const express = require("express");

const router = express.Router();

const { browse } = require("../../../controllers/programAction");

router.get("/", browse);

module.exports = router;
