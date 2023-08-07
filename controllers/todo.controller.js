const Todo = require("../models/todo.model");

const getTodos = async (req, res) => {
  try {
    const todos = await Todo.findAll();

    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.write(JSON.stringify(todos));
    res.end();
  } catch (error) {
    console.error("ERROR:", error);
  }
};

const getTodo = async (req, res, id) => {
  try {
    const todo = await Todo.findById(id);

    if (!todo) {
      res.setHeader("Content-Type", "application/json");
      res.writeHead(404);
      res.write(JSON.stringify({ message: "Todo not found!" }));
      res.end();
    } else {
      res.setHeader("Content-Type", "application/json");
      res.writeHead(200);
      res.write(JSON.stringify(todo));
      res.end();
    }
  } catch (error) {
    console.error("ERROR:", error);
  }
};

const addTodo = async (req, res) => {
  try {
    let body = "";
    req.on("data", (data) => {
      body += data.toString();
    });

    req.on("end", async () => {
      const { id, title, completed } = JSON.parse(body);

      const todo = {
        id,
        title,
        completed,
      };

      const updatedTodo = await Todo.create(todo);

      res.setHeader("Content-Type", "application/json");
      res.writeHead(201);
      res.write(JSON.stringify(updatedTodo));
      res.end();
    });
  } catch (error) {
    console.error("ERROR:", error);
  }
};

const updateTodo = async (req, res, id) => {
  try {
    const todo = await Todo.findById(id);

    if (!todo) {
      res.setHeader("Content-Type", "application/json");
      res.writeHead(404);
      res.write(JSON.stringify({ message: "Todo not found!" }));
      res.end();
    } else {
      let body = "";
      req.on("data", (data) => {
        body += data.toString();
      });

      req.on("end", async () => {
        const { id, title, completed } = JSON.parse(body);

        const todo = {
          id: id || todo.id,
          title: title || todo.title,
          completed: completed || todo.completed,
        };

        const updatedTodo = await Todo.update(id, todo);

        res.setHeader("Content-Type", "application/json");
        res.writeHead(200);
        res.write(JSON.stringify(updatedTodo));
        res.end();
      });
    }
  } catch (error) {
    console.error("ERROR:", error);
  }
};

const deleteTodo = async (req, res, id) => {
  try {
    const todo = await Todo.findById(id);

    if (!todo) {
      res.setHeader("Content-Type", "application/json");
      res.writeHead(404);
      res.write(JSON.stringify({ message: "Todo not found!" }));
      res.end();
    } else {
      await Todo.destroy(id);
      res.setHeader("Content-Type", "application/json");
      res.writeHead(200);
      res.write(JSON.stringify({ message: "Product deleted successfully!" }));
      res.end();
    }
  } catch (error) {
    console.error("ERROR:", error);
  }
};

module.exports = {
  getTodos,
  getTodo,
  addTodo,
  updateTodo,
  deleteTodo,
};
