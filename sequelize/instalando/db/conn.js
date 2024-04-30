const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('nodesequelize', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
})

try {

  sequelize.authenticate()
  console.log('conectamos com sucsso com o sequelize')
  
} catch (error) {
  console.log(`Não foi possível conectar: `, error)
}

module.exports = sequelize