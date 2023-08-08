let todos = require("../todos/todos.json");
const { writeDataToFile } = require("../utils");

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
    const newTodo = { id: Date.now(), ...todo };
    todos.push(newTodo);
    writeDataToFile("./todos/todos.json", todos);
    resolve(newTodo);
  });
};

const update = (id, todo) => {
  return new Promise((resolve, reject) => {
    const index = todos.findIndex((t) => t.id == id);
    todos[index] = { id, ...todo };
    writeDataToFile("./todos/todos.json", todos);
    resolve(todos[index]);
  });
};

const remove = (id) => {
  return new Promise((resolve, reject) => {
    todos = todos.filter((t) => t.id != id);
    writeDataToFile("./todos/todos.json", todos);
    resolve();
  });
};

module.exports = {
  findAll,
  findById,
  create,
  update,
  remove,
};
