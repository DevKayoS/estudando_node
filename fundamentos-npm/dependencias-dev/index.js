const _ = require('lodash')
// tinha que instalar uma versão anterior do chalk mas fiquei com preguiça porem continua sendo uma dependencia de desenvolvimento tudo certo :)
// const chalk = require('chalk')

const a = [1,2,3,4,5]
const b = [2,4,5,6,7]

console.log(_.difference(a,b))