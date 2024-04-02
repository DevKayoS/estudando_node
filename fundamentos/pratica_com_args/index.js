const minimist = require('minimist')

// externo
const args = minimist(process.argv.slice(2))

const numA = parseInt(args['numA'])
const numB = parseInt(args['numB'])

// interno
const soma = require('./soma').soma

soma(numA,numB)


