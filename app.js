const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("./middlewares/cors");
const apiRouter = require("./routes/apiRouter");

const connectToDatabase = require("./database/connect");

const PORT = 3000;

const app = express();

connectToDatabase();

app.use(
  cors,
  bodyParser.json(),
  express.static(path.join(__dirname, "public")),
  apiRouter
);
app.listen(PORT, () => {
  console.log(`Server is running "http://localhost:${PORT}"`);
});
