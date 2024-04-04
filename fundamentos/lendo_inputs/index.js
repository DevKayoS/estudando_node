const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
})

readline.question("qual a sua linguagem preferida? ", (language) => {
  if(language === "Python") {
    console.log('Isso nem é linguagem')
  }
  console.log(`A minha linguagem preferida é: ${language}`)
  readline.close()
})