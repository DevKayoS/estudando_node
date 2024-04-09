const fs = require('fs')

fs.rename('arquivo.txt', 'teste.js', function(err){
  if(err){
    console.log(err)
  }
})