# REST API using prisma

This repository is a simple API using Prisma and TypeScript-based Node projects. The goal here is to get familiar with Prisma.

## Installation

Clone the repo and install the dependencies.

```bash
git clone https://github.com/rodrigo-marcolino/prisma-starter.git
cd prisma-starter
npm i
```

### Create and seed the database

Run the following command to create your SQLite database file. This also creates the `Product` and `Review` tables that are defined in [`prisma/schema.prisma`](./prisma/schema.prisma):

```
npx prisma migrate dev --name init
```

## Start the REST API server

```bash
npm run start
```

The server is now running on `http://localhost:3000`. You can now the API requests, e.g. [`http://localhost:3000/products`](http://localhost:3000/products).

REST API endpoints:

### `GET`

- `/products`: Fetch all products.
- `/products/:id`: Fetch a single product by its `id`.

### `POST`

- `/products`: Add a new product.
- Body:
  - `name: String` : The product name
  - `description: String` : The product description
  - `price: Int` : The product price
- `/reviews`: Add a new Review
- Body:

  - `text: String` : Review about the a specific product
  - `rating: Int` : The product rating
  - `productId: String` : The product id (cuid())

  ### `DELETE`

- `/products/:id`: Delete a product by its `id`
