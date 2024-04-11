const _ = require('lodash')


const b = [2,3,3,4,4,4,5,5,3,6,6]

const sorted = _.sortedUniq(b)
console.log(sorted)     