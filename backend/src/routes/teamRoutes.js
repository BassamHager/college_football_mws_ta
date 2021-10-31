const express = require("express");
// controllers
const {
  getTeams,
  getTeamCalendar,
  getTeamGameStats,
} = require("../controllers/teamControllers");

const router = express.Router();

router.get("/", getTeams);
router.get("/teams/:teamName/calendar", getTeamCalendar);
router.get("/teams/:teamName/gamestats/:year", getTeamGameStats);

module.exports = router;
