//pegando um módulo do sequelize para conseguir pegar todos os tipos de dado do sql
const {DataTypes} = require('sequelize')
//importando a conexão com o banco de dados ele vai entender automaticamente
const db = require('../db/conn')
//CRIANDO O MODEL User
const User = db.define('User', {
  //estou passando o que o User tem um nome que é uma string e nao pode receber valores null
  name: { 
    type: DataTypes.STRING,
    allowNull: false
  },
  //estou passando que o User deve ter uma ocupação e que deve ser passada como uma string e que é um campo obrigatório
  occupation: {
    type: DataTypes.STRING,
    required: true
  },
  //estou passando um valor boolean para a tabela User para saber se o usuário aceitou o newsletter ou nao por isso um boolean
  newsletter: {
    type: DataTypes.BOOLEAN,
  },
})
//estou exportando esse model 
module.exports = User