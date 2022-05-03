module.exports = {
    development: {
      client: "sqlite3",
      connection: {
        filename: "./data/data.db3",
      },
      useNullAsDefault: true,
      migrations: {
        directory: "./data/migrations",
      },
      seeds: {
        directory: "./data/seeds",
      },
      pool: {
        afterCreate: (conn, done) => {
          // runs after a connection is made to the sqlite engine
          conn.run("PRAGMA foreign_keys = ON", done); // turn on FK enforcement
        },
      },
    },
  
    testing: {
      client: "sqlite3",
      connection: {
        filename: "./data/data.db3",
      },
      useNullAsDefault: true,
      migrations: {
        directory: "./data/migrations",
      },
      seeds: {
        directory: "./data/seeds",
      },
      pool: {
        afterCreate: (conn, done) => {
          // runs after a connection is made to the sqlite engine
          conn.run("PRAGMA foreign_keys = ON", done); // turn on FK enforcement
        },
      },
    },
  
    production: {
      client: "sqlite3",
      // due to small size of this DB, this will be stored in a local db file via sqlite3
      // see ReadMe file for more details
      connection: {
        filename: "./data/data.db3",
      },
      pool: {
        afterCreate: (conn, done) => {
          // runs after a connection is made to the sqlite engine
          conn.run("PRAGMA foreign_keys = ON", done); // turn on FK enforcement
        },
      },
      migrations: {
        directory: "./data/migrations",
        tableName: "knex_migrations",
      },
      seeds: {
        directory: "./data/seeds",
      },
    },
  };