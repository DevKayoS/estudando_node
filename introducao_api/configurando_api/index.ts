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
app.get('/', (req: Request, res: Response)=>{
  res.json({message: 'Primeira rota criada com sucesso!'})
})



app.listen(3000)