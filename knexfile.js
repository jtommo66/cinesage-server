require("dotenv").config();

const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;
const db_name = process.env.DB_NAME;

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  client: "mysql2",
  connection: {
    host: host,
    user: user,
    password: password,
    database: db_name,
    charset: "utf8",
  },
};
