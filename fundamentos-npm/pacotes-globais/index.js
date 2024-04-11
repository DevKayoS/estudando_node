const _ = require('lodash')

// criando uma lista de numeros repetidos
const arr = [2,3,3,4,4,4,5,5,3,6,6]
// função retira a repetição de numeros do arr
const sorted = _.sortedUniq(arr)
console.log(sorted)     