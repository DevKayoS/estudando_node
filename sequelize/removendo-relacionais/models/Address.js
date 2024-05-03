const {DataTypes} = require('sequelize')

const db = require('../db/conn')

const User = require('./User')

const Address = db.define('Address', {

  street: {
    type: DataTypes.STRING,
    required: true,
  },
  number: {
    type: DataTypes.STRING,
    required: true,
  },
  city: {
    type: DataTypes.STRING,
    required: true,
  },
})
//fazendo o relacionamento ou seja o user tem um endereço
Address.belongsTo(User)
//usuário tem vários endereços
User.hasMany(Address)

module.exports = Address