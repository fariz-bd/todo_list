const db = require('../config');
const sequelize = require('sequelize');

let User = db.define('usertodo',
{
    id: {
        type: sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: sequelize.DataTypes.STRING,
    },
    password:{
        type: sequelize.DataTypes.STRING,
    },
    email:{
        type: sequelize.DataTypes.STRING,
    },
    foto: {
        type: sequelize.DataTypes.STRING,
    }

},{
    freezeTableName: true,
    timestamps: false
});

User.sync({ alter: true});

module.exports = User;