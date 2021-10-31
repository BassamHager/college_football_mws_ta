const express = require("express");
// models
const HttpError = require("./models/http-error");
// routes
const teamRoutes = require("./routes/teamRoutes");

const PORT = process.env.PORT || 4000;

const app = express();

app.use("/", teamRoutes);

app
  .use(() => {
    const error = new HttpError("Could not find this route.", 404);
    throw error;
  })
  .listen(PORT, () => console.log(`Running on: http://localhost:${PORT}`));
