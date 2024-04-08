const fs = require('fs')
console.log("inicio")

fs.writeFileSync("arquivo.js", 'console.log("oi")')

console.log('Fim')