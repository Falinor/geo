const config = {
  environment: process.env.NODE_ENV || 'dev',
  server: {
    port: process.env.PORT || 8080
  },
  mongo: {
    url: process.env.MONGO_DB_URI || 'mongodb://localhost/server'
  },
  postgresql: {
    db: 'geo',
    login: 'postgres',
    password: '5plhQY#DPie',
    opts: {
      host: 'localhost',
      dialect: 'postgres'
    }
  }
};

module.exports = config;
