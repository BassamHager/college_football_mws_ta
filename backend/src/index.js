const express = require("express");
// routes
const teamRoutes = require("./routes/teamRoutes");

const PORT = process.env.PORT || 4000;

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  next();
});

app
  .use("/", teamRoutes)
  .listen(PORT, () => console.log(`Running on: http://localhost:${PORT}`));
