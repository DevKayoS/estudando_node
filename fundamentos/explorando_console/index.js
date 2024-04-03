//imprimindo mais de um valor 
const anyNumber = 10
const anyText = "Kayo"
const anyArray = [1,2]

console.log(anyNumber, anyText, anyArray)

// contagem de impressões
console.count(`O valor de x é: ${anyNumber}, contagem`)
console.count(`O valor de x é: ${anyText}, contagem`)
console.count(`O valor de x é: ${anyText}, contagem`)
console.count(`O valor de x é: ${anyNumber}, contagem`)

//  variavel entre string 
console.log("O nome é %s, ele é programador", anyText)
console.log('O valor é %s', anyNumber)


//  lImpar console
setTimeout(() => {
  console.clear()
}, 5000);