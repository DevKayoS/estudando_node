const {Sequelize} =  require('sequelize')
require('dotenv').config();

const sequelize =  new Sequelize('nodemvc', 'root', process.env.DB_PASSWORD, {
  host: 'localhost',
  dialect: 'mysql'
})

try {
  sequelize.authenticate()
} catch (error) {
  console.log(error)
}


module.exports=sequelize