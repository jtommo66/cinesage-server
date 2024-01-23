const user = process.env.USER;
const password = process.env.PASSWORD;
const host = process.env.HOST;

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
