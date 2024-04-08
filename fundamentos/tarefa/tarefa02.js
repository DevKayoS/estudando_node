const inquirer = require('inquirer')
const chalk = require('chalk')


inquirer.prompt([{
  name: 'p1',
  message: 'Qual é o seu nome?'
},
{
  name: 'p2',
  message: 'Qual é a sua idade?'
}]).then((asnwers) => {
   
  if(!asnwers.p1 || !asnwers.p2) {
    throw new Error("Os campos são obrigatórios!!")
  }

  console.log(chalk.bgYellow.black(`o ${asnwers.p1} tem ${asnwers.p2}`))
  
}).catch((err) => console.log(err))