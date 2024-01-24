//importing modules
const { Sequelize } = require('sequelize')

//Database connection with dialect of postgres specifying the database we are using
//port for my database is 5433
//database name is discover
const sequelize = new Sequelize(`postgres://postgres:1234qwer@localhost:5433/adarshlearn`, { dialect: "postgres" })

//checking if connection is done
sequelize.authenticate().then(() => {
  console.log(`Database connected`)
}).catch((err) => {
  console.log(err)
})

// const db = {}
// db.Sequelize = Sequelize
// db.sequelize = sequelize

// //connecting to model
// db.users = require('./userModel')(sequelize, DataTypes)

//exporting the module
module.exports = sequelize








// const { Client } = require('pg')

// const client = new Client({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'adarshlearn',
//   password: '1234qwer',
//   port: 5433,
// })
// client.connect(function (err) {
//   if (err) throw new Error(err);
//   else console.log("Connected!");
// });