# Demo Mini Ecommerce (Nextjs+GraphQL)

## Install Project

install `node` `mongodb`

Goto Project Path

```bash
cd project_path
```

Install Package

```bash
npm install
```

or

```bash
yarn install
```

## Init Environment

Add config file

```bash
cp .env.example .env
```

Change Config `MONGO_URL`

## Seed Data AND Test Script

### Seed

```bash
npm run seeds
```

or

```bash
yarn seeds
```

### Test

```bash
npm run test
```

or

```bash
yarn test
```

## Run Develop AND Build Script

### Run Develop

```bash
npm run dev
```

or

```bash
yarn dev
```

### Build And Run Production

```bash
npm run build
.
.
.
npm run start
```

or

```bash
yarn build
.
.
.
yarn start
```

## Frontend Endpoint

[a link](http://localhost:3000)

## Backend Endpoint

[a link](http://localhost:3000/api/graphql)

### Demo Script

#### GET ALL PRODUCT

```gql
query($pagination: PaginationArg!) {
  products(pagination: $pagination) {
    items {
      id
      name
      price
      description
      image
      slug
    }
    count
  }
}
```

Query Value

```json
{
  "pagination": {"offset": 0, "first": 10}
}
```

#### CREATE ORDER

```gql
mutation {
  createOrder(
    items: [
      {
        pid: "5f92b1628390263e9fd52ade"
        name: "Awesome Granite Chair"
        price: 54.00
        qty: 3
      }
    ]
    amount: 162.00
    vat: 11.34
  ) {
    _id
  }
}
```
