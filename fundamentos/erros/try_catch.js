const x = "10"

try {
  if( typeof x === "number"){
    console.log("é um numero inteiro")
  }
} catch (error) {
   console.log(`Erro: ${error}`)
}