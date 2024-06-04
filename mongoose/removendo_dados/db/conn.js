const mongoose = require('mongoose')

async function main(){
  await mongoose.connect('mongodb://localhost:27017/testemongoose')
  console.log('conectou ao MongoDB + mongoose')
}

main().catch((err)=> console.log(err))

module.exports = mongoose