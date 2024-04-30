//importando
const {Sequelize} = require('sequelize')
//fazendo a conexão e passando os dados necessários para isso
const sequelize = new Sequelize('nodesequelize', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
})

//fazendo a autentificação para realizar a conexão
try {

  sequelize.authenticate()
  console.log('conectamos com sucsso com o sequelize')
  
} catch (error) {
  //imprimindo uma mensagem de erro caso dê algo errado
  console.log(`Não foi possível conectar: `, error)
}
//exportando a configuração
module.exports = sequelize