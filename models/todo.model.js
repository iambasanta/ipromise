let todos = require("../todos/todos.json");
const { getFilePath, writeDataToFile } = require("../utils/utils");

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
    const file = getFilePath("../todos/todos.json");
    writeDataToFile(file, todos);
    resolve(newTodo);
  });
};

const update = (id, todo) => {
  return new Promise((resolve, reject) => {
    const index = todos.findIndex((t) => t.id == id);
    todos[index] = { id, ...todo };
    const file = getFilePath("../todos/todos.json");
    writeDataToFile(file, todos);
    resolve(todos[index]);
  });
};

const remove = (id) => {
  return new Promise((resolve, reject) => {
    todos = todos.filter((t) => t.id != id);
    const file = getFilePath("../todos/todos.json");
    writeDataToFile(file, todos);
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
