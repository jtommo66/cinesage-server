const knex = require("knex")(require("../knexfile"));
require("dotenv").config();

const keywordList = async (req, res) => {
  try {
    const keywords = await knex("keyword");
    res.json(keywords);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Unable to find keyword list" });
  }
};
module.exports = { keywordList };
