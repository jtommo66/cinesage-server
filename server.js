const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const port = process.env.PORT;
const movieRoutes = require("./routes/movie-routes");
const genreRoutes = require("./routes/genre-routes");
const keywordRoutes = require("./routes/keyword-routes");
// const loginRoutes = require("./routes/login-routes");

app.use(express.json());
app.use(cors());
app.use(express.static("public"));

app.use("/movies", movieRoutes);
app.use("/genres", genreRoutes);
app.use("/keywords", keywordRoutes);
// app.use("/login", loginRoutes);

app.listen(port, () => {
  console.log("Server running on port " + port);
});
