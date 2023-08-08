# `ipromise`: BASIC TODO REST API

This project is a basic Todo REST API built using the Node.js `HTTP` module. The API enables you to manage a list of tasks (todos) by executing CRUD (Create, Read, Update, Delete) operations on json data through HTTP requests.

## Getting started

- Clone the repository

```bash
git clone git@github.com:iambasanta/ipromise.git
cd ipromise
```

- Install dependencies

```bash
npm install
```

- Copy the `.env.example` file to `.env`

```bash
cp .env.example .env
```

Open the `.env` file and update the `PORT` value to your preferred port number.

- Start the API in development mode

```bash
npm run dev
```

- Start the API in production mode

```bash
npm start
```

## Routes

The `ipromise` API provides the following routes for managing todos:

| METHOD | URL            | DESCRIPTION                  |
| ------ | -------------- | ---------------------------- |
| GET    | /api/todos     | Get a list of all todos      |
| GET    | /api/todos/:id | Get a specific todo by ID    |
| POST   | /api/todos     | Create a new todo            |
| PUT    | /api/todos/:id | Update a specific todo by ID |
| DELETE | /api/todos/:id | Delete a specific todo by ID |
