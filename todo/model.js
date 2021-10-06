const db = require('../config');
const sequelize = require('sequelize');

let Todo = db.define('todo',
{
    id: {
        type: sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    kegiatan: {
        type: sequelize.DataTypes.STRING,
    },
    status:{
        type: sequelize.DataTypes.INTEGER,
        defaultValue: 0
    },
    userid:{
        type: sequelize.DataTypes.INTEGER,
    }

},{
    freezeTableName: true,
    timestamps: false
});

Todo.sync({ alter: true});

module.exports = Todo;