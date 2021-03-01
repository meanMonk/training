const {
    DataTypes,
} = require('sequelize');
const sequelize = require('../db.config');

const UsersModel = sequelize.define('Users',{
    firstname: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    access: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
},{
    sequelize,
    modelName: 'Users'
});

// await User.sync({force: true});
async function initTable() {
    try {
        await UsersModel.sync();
        console.log('table is created for Users!')
    } catch(error) {
        console.log('error while creating table Users',error)
    }
}


initTable();

module.exports = UsersModel;