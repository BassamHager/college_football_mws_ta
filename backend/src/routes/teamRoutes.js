const express = require("express");
// controllers
const { getTeams, getTeamCalendar } = require("../controllers/teamControllers");

const router = express.Router();

router.get("/", getTeams);
router.get("/teams/:teamName/calendar", getTeamCalendar);

module.exports = router;
