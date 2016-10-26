require('dotenv').config();

module.exports = {

  development: {
    client     : 'postgresql',
    connection : {
      host     : process.env.DB_HOST,
      database : process.env.DB_NAME,
      user     : process.env.DB_USER,
      password : process.env.DB_PASS,
      port     : process.env.DB_PORT,
      ssl      : process.env.DB_SSL
    },
    debug: true,
    migrations: {
      directory: './db/migrations',
      tableName: 'migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
