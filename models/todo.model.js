let todos = require("../todos/todos.json");

const findAll = () => {
  return new Promise((resolve, reject) => {
    resolve(todos);
  });
};

const findById = (id) => {
  return new Promise((resolve, reject) => {
    const todo = todos.find((t) => t.id == id);
    resolve(todo);
  });
};

const create = (todo) => {
  return new Promise((resolve, reject) => {
    todos.push(todo);
    resolve(todo);
  });
};

const update = (id, todo) => {
  return new Promise((resolve, reject) => {
    const index = todos.findIndex((t) => t.id == id);
    todos[index] = { id, ...todos };
    resolve(todos[index]);
  });
};

const destroy = (id, todo) => {
  return new Promise((resolve, reject) => {
    todos = todos.filter((t) => t.id !== id);
    resolve();
  });
};

module.exports = {
  findAll,
  findById,
  create,
  update,
  destroy,
};
