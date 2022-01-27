import express, { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())
const port = 3000

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'helo' })
})

app.get('/products', async (req: Request, res: Response) => {
  const products = await prisma.product.findMany({
    include: {
      reviews: true,
    },
  })
  res.json(products)
})

app.post('/products', async (req: Request, res: Response) => {
  const { body } = req
  const product = await prisma.product.create({
    data: {
      name: body.name,
      description: body.description,
      price: body.price,
    },
  })
  res.json(product)
})

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`)
})
