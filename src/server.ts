import express, { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const app = express()
const port = 3000

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'helo' })
})

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`)
})
