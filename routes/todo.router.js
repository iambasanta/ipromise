const {
  getTodos,
  getTodo,
  addTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todo.controller");

const router = (req, res) => {
  if (req.url === "/api/todos" && req.method === "GET") {
    getTodos(req, res);
  } else if (req.url.match(/\/api\/todos\/([0-9]+)/) && req.method === "GET") {
    const id = req.url.split("/")[3];
    getTodo(req, res, id);
  } else if (req.url === "/api/todos" && req.method === "POST") {
    addTodo(req, res);
  } else if (req.url.match(/\/api\/todos\/([0-9]+)/) && req.method === "PUT") {
    const id = req.url.split("/")[3];
    updateTodo(req, res, id);
  } else if (
    req.url.match(/\/api\/todos\/([0-9]+)/) &&
    req.method === "DELETE"
  ) {
    const id = req.url.split("/")[3];
    deleteTodo(req, res, id);
  } else {
    res.writeHead(404);
    res.write(JSON.stringify({ message: "Route not found!" }));
    res.end();
  }
};

module.exports = router;
