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

  console.log(name)
  console.log(price)
})
app.get('/', (req: Request, res: Response)=>{
  res.json({message: 'Primeira rota criada com sucesso!'})
})



app.listen(3000)