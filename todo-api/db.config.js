const {Sequelize} = require('sequelize');
// const sequelize = new Sequelize('postgres://username:password@localhost:5432/testdb')
const sequelize = new Sequelize('postgres://localhost:5432/testdb')
async function initDb() {
    try {
        await sequelize.authenticate();
        console.log('database connection successful!')
    } catch(err) {
        console.log('db is not connected!',err)
    }

    return sequelize;
}

initDb();

module.exports = sequelize;