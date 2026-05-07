# GraphQL Node Apollo Static DB

A simple GraphQL API built using **Node.js** and **Apollo Server** with a static in-memory database.

This project is designed for learning the fundamentals of GraphQL, Apollo Server, Queries, Mutations, and Resolvers without using a real database.

---

## Features

- GraphQL API with Apollo Server
- Static in-memory database
- CRUD operations
- GraphQL Queries & Mutations
- Simple project structure
- Beginner friendly
- Fast setup without MongoDB or SQL

---

## Tech Stack

- Node.js
- GraphQL
- Apollo Server

---

## Project Structure

```bash
.
├── graphql/
│   ├── resolvers/
│   └── typeDefs/
├── data/
│   └── _db.js
├── index.js
├── package.json
└── README.md
```

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/sals1995/graphql-node-apollo-static-db.git
```

### 2. Navigate to the Project Folder

```bash
cd graphql-node-apollo-static-db
```

### 3. Install Dependencies

```bash
npm install
```

---

## Running the Project


### Production Mode

```bash
npm start
```

---

## Server URL

After starting the server:

```bash
http://localhost:3200/graphql
```

or:

```bash
http://localhost:3200/
```

(depending on your Apollo Server configuration)

---

# GraphQL API

## Example Schema

```graphql
type User {
  id: Int!
  name: String!
  email: String!
}
```

---

## Queries

### Get All Users

### Get Single User

---

## Mutations

### Add User

### Update User


### Delete User


## Example Response

```json
{
  "data": {
    "users": [
      {
        "id": "1",
        "name": "John",
        "email": "john@example.com"
      }
    ]
  }
}
```

---

## Static Database

This project uses a simple JavaScript array as a fake database.

Example:

```js
const users = [
  {
    id: "1",
    name: "John",
    email: "john@example.com"
  }
];
```

This makes the project ideal for learning GraphQL concepts before integrating a real database like MongoDB or PostgreSQL.

---

## Scripts

| Command | Description |
| --- | --- |
| `npm start` | Run the application |

---

## Learning Objectives

This project helps in learning:

- GraphQL fundamentals
- Apollo Server setup
- GraphQL schema design
- Queries and Mutations
- Writing resolvers
- Working with static data
- Backend API basics

---

## Future Improvements

- MongoDB integration
- Authentication & Authorization
- Validation
- Error handling
- Pagination
- File uploads
- Unit testing
- Docker support

---


## Useful Resources

- GraphQL Documentation
- Apollo Server Documentation
- Node.js Documentation

---


## License

This project is licensed under the MIT License.

---


## Repository Link

https://github.com/sals1995/graphql-node-apollo-static-db