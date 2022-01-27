import express, { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello')
})

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`)
})
