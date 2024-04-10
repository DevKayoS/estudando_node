const path = require('path')

// path absolute
console.log(path.resolve('Adobe'))

// formar path

const midFolder = "relatorios"
const filename = "kayo.txt"

const finalPath = path.join("/", 'arquivos', midFolder, filename)

console.log(finalPath)