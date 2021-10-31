// models
const HttpError = require("../models/http-error");
// util
const cfb = require("../util/cfb");

// get all available teams
const getTeams = async (_, res) => {
  try {
    const apiInstance = new cfb.TeamsApi();

    const opts = {
      conference: "B12",
    };

    apiInstance
      .getTeams(opts)
      .then((data, err) => {
        if (err) {
          const error = new HttpError(
            "Something went wrong, could not fetch teams",
            404
          );

          return res.json(error);
        }

        return res.json(data);
      })
      .catch((err) => console.error(err.message));
  } catch (error) {
    console.error("ERROR:", error.message);
  }
};

// get team calendar
const getTeamCalendar = async (req, res) => {
  try {
    const apiInstance = new cfb.GamesApi();

    const currentTime = new Date();
    const year = currentTime.getFullYear();

    const opts = {
      team: req.params.teamName,
    };

    apiInstance.getGameMedia(year, opts).then((data, err) => {
      if (err) {
        const error = new HttpError(
          "Something went wrong, could not fetch team calendar",
          404
        );

        return res.json(error);
      }

      return res.json(data);
    });
  } catch (error) {
    console.error("ERROR:", error.message);
  }
};

module.exports = { getTeams, getTeamCalendar };
