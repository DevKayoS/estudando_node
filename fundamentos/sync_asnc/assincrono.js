const fs =  require("fs")

console.log("Inicio")

fs.writeFile("teste.js", "console.log('Oi')", function(err){
  setTimeout(function(){
    console.log("Arquivo criado")
  }, 1000)
})

console.log("fim")