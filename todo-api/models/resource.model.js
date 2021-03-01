const {
    DataTypes,
} = require('sequelize');
const sequelize = require('../db.config');

const ResourceModel = sequelize.define('Resource',{
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
},{
    sequelize,
    modelName: 'Resource'
});

// await User.sync({force: true});
async function initTable() {
    try {
        await ResourceModel.sync();
        console.log('table is created for resource!')
    } catch(error) {
        console.log('error while creating table',error)
    }
}


initTable();

module.exports = ResourceModel;