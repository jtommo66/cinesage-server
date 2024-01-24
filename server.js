const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log("Server running on port " + port);
});
