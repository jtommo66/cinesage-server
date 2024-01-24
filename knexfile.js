require("dotenv").config();

const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "mysql2",
    connection: {
      host: host,
      user: user,
      password: password,
      database: "cinesage_db",
      charset: "utf8",
    },
  },
};
