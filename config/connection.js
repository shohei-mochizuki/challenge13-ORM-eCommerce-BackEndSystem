require('dotenv').config(); // dotenv: store sensitive data in .env file

const Sequelize = require('sequelize'); // sequelize: Connection to MySQL2

const sequelize = process.env.JAWSDB_URL // JAWSDB_URL is for HEROKU
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, { // This will be used in case of executing locally
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
