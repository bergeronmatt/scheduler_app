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
      client: "postgresql",
      connection: process.env.DATABASE_URL,
      pool: {
        min: 2,
        max: 10,
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