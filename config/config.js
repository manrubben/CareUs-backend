require('dotenv').config();

module.exports = {

  "development": {
    "username": "root",
    "password": "password",
    "database": "tfgdb",
    "host": "localhost",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": "password",
    "database": "tfgdb_test",
    "host": "localhost",
    "dialect": "mysql"
  },
  "production": {
    "username": "b670e3c59c4b4d",
    "password": "7f03c3db",
    "database": "heroku_0f45071f282b227",
    "host": "eu-cdbr-west-02.cleardb.net",
    "dialect": "mysql"
  }
}
