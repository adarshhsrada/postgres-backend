// models/user.js
const { DataTypes } = require('sequelize');
const sequelize = require('../../../db');

const User = sequelize.define('users', {
    // Define model attributes
    user_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    token : {
        type : DataTypes.STRING,
        allowNull : true
    }
});

module.exports = User;
