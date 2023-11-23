require("dotenv").config();

const {
  DB_NAME,
  DB_HOST,
  DB_USERNAME,
  DB_PASSWORD,
  DB_DIALECT,
  DB_PORT,
  DBTEST_NAME,
  DBTEST_HOST,
  DBTEST_USERNAME,
  DBTEST_PASSWORD,
  DBTEST_DIALECT,
  DBTEST_PORT,
} = process.env;

module.exports = {
  development: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    dialect: DB_DIALECT,
    port: DB_PORT,
  },
  test: {
    username: DBTEST_USERNAME,
    password: DBTEST_PASSWORD,
    database: DBTEST_NAME,
    host: DBTEST_HOST,
    dialect: DBTEST_DIALECT,
    port: DBTEST_PORT,
  },
  production: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    dialect: DB_DIALECT,
    port: DB_PORT,
  },
};
