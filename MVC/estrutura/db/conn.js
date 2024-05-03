const {Sequelize} =  require('sequelize')

const sequelize =  new Sequelize('nodemvc', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
})

try {
  
  sequelize.authenticate()
  console.log('Server as been connected')

} catch (error) {
  console.log('Não foi possível realizar a conexão: ', error)
}

exports.default=sequelize