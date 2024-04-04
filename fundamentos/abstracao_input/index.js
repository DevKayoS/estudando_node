const inquirer = require('inquirer')
const chalk = require('chalk')

inquirer.prompt([{
  name: 'p1',
  message: 'Qual é a primeira nota?'
},{
  name: 'p2',
  message: 'Qual é a segunda nota?'
}]).then((answers)=> {
  const firstResult = answers.p1
  const secondResult = answers.p2

  const media = (parseFloat(firstResult) + parseFloat(secondResult))/2

  if (media >= 5){
    console.log(chalk.green(`A média foi ${media}, parabéns você foi aprovado!!`))
  } else {
    console.log(chalk.red(`A média foi ${media}, infelizmente você foi reprovado!!`))
  }

//  console.log(`A primeira nota é ${answers.p1}`)
//  console.log(`A segunda nota é ${answers.p2}`)
}).catch(err => console.log(err))