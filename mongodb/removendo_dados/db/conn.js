const {MongoClient} = require('mongodb')

const uri = "mongodb://localhost:27017/testemongodb"

const client = new MongoClient(uri)

async function run(){
  try {
    await client.connect()
    console.log("Conectando com o mongodb") 
  } catch (error) {
    console.log("Algo deu errado: ",error)
  }
}

run()

module.exports =  client