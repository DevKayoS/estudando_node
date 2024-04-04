const chalk = require('chalk')

const nota = 6

if (nota >= 7){
  console.log(chalk.green('Parabéns! Vocês está aprovado'))
} else {
  console.log(chalk.bgRed('Você foi reprovado'))
}