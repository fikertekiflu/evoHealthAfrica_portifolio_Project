const { Sequelize , DataTypes } = require('sequelize');
const { sequelize } = require('../config/db.js');


const User = sequelize. define('User',{
   username:{
    type: DataTypes.STRING,
    allownull: false,
    unique: true,
   },
   email:{
    type: DataTypes.STRING,
    allownull:false,
    unique: true,
   },
   password: {
    type: DataTypes.STRING,
    allowNull: false,
},
})

module.exports =  User;








