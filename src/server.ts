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

app.get('/products/:id', async (req: Request, res: Response) => {
  const { id }: { id?: string } = req.params
  const product = await prisma.product.findUnique({
    where: {
      id: id,
    },
    include: {
      reviews: true,
    },
  })
  res.json(product)
})

app.post('/products', async (req: Request, res: Response) => {
  const { name, description, price } = req.body
  const product = await prisma.product.create({
    data: {
      name: name,
      description: description,
      price: price,
    },
  })
  res.json(product)
})

app.post('/reviews', async (req: Request, res: Response) => {
  const { text, rating, productId } = req.body

  const review = await prisma.review.create({
    data: {
      text: text,
      rating: rating,
      product: {
        connect: {
          id: productId,
        },
      },
    },
  })

  res.json(review)
})

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`)
})
