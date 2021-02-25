module.exports = {
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    user: "root",
    password: "Eastvan405",
    database: "toolbox",
    charset: "utf8",
  },
  production: {
    client: "mysql",
    connection: process.env.JAWSDB_URL,
  },
};
