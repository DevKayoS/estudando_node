const x = 10

//checar se x é um numero

if (typeof x !== "number" && !Number.isInteger(x)) {
  throw new Error("Essa constante não é um numero inteiro")
}

console.log('Continuando o código')