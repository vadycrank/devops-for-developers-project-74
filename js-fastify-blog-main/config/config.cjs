require('dotenv').config();

const getPostgresConfig = () => ({
  dialect: 'postgres',
  database: process.env.DATABASE_NAME,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  port: process.env.DATABASE_PORT,
  host: process.env.DATABASE_HOST,
});

const testConfig = process.env.TEST_DATABASE === 'postgres'
  ? getPostgresConfig()
  : {
    dialect: 'sqlite',
    storage: './database.test.sqlite',
  };

module.exports = {
  development: {
    dialect: 'sqlite',
    storage: './database.sqlite',
  },
  production: getPostgresConfig(),
  test: testConfig,
};
