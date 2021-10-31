const express = require("express");
// controllers
const { getTeams } = require("../controllers/teamControllers");

const router = express.Router();

router.get("/", getTeams);

module.exports = router;
