// models
const HttpError = require("../models/http-error");
// util
const cfb = require("../util/cfb");

const getTeams = async (_, res) => {
  try {
    console.log("teamControllers.getTeams");

    const apiInstance = new cfb.TeamsApi();

    var opts = {
      conference: "B12",
    };

    apiInstance
      .getTeams(opts)
      .then(
        (data) => res.json(data),
        (error) => res.json(error)
      )
      .catch((err) => console.error(err.message));
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = { getTeams };
