const { Sequelize } = require('sequelize');

// Create a new Sequelize instance with hard-coded configuration
const sequelize = new Sequelize('evohealthafrica', 'root', 'fiker2901#@!', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,  // Optionally disable logging
});

// Authenticate and test the connection
sequelize.authenticate()
    .then(() => {
        console.log('Connection to MySQL established successfully.');
    })
    .catch((error) => {
        console.error('Unable to connect to MySQL:', error);
    });

module.exports = { sequelize };
