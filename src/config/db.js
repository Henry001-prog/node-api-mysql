const Sequelize = require('sequelize');
const env = require('../.env');

const dbName = env.DB_NAME;
const dbUser = env.DB_USER;
const dbPassword = env.DB_PASSWORD;
const dbHost = env.DB_HOST;

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    dialect: 'mysql'
});

sequelize.authenticate()
.then(function() {
    console.log('Database connection successful!');
}).catch(function() {
    console.log('Error: database connection not successful!');
});

module.exports = sequelize;