import { Request, Response} from "express";

const express = require('express')
const app = express()

app.use(
  express.urlencoded({
    extend: true
  })
)

app.use(express.json())

// rotas
app.post('/createproduct', (req: Request, res: Response)=>{

  const name: string = req.body.name
  const price: number = req.body.price
  if(!name){
    res.status(422).json({message: "O campo name é obrigatório"})
    return
  }

  console.log(name)
  console.log(price)
  res.status(201).json({message: `Produto ${name} salvo com sucesso`})
})
app.get('/', (req: Request, res: Response)=>{
  res.status(200).json({message: 'Primeira rota criada com sucesso!'})
})



app.listen(3000)