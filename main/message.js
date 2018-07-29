const { ipcMain } = require("electron");
const fs = require("fs");
const CMD = require("../constants");

function getList() {
  const str = fs.readFileSync("./.data/todoList", "utf8");
  return JSON.parse(str) || [];
}

function setList(data) {
  return fs.writeFileSync("./.data/todoList", JSON.stringify(data), "utf8");
}

function readList(type) {
  return getList().filter(d => d.status === type);
}

function addTodo(data) {
  const list = getList();
  list.push(data);
  return setList(list);
}

function changeStatus(id) {
  const list = getList();
  list.forEach(l => {
    if (l.id === id) {
      l.status = l.status === "doing" ? "complete" : "doing";
    }
  });
  setList(list);
  return list;
}

module.exports = function listen() {
  ipcMain.on("message", (e, args) => {
    switch (args.cmd) {
      case "GET_LIST":
        e.sender.send("reply", readList(args.params));
        break;
      case "ADD_TODO":
        e.sender.send("reply", addTodo(args.params));
        break;
      case "CHANGE_TODO":
        e.sender.send("reply", changeStatus(args.params));
        break;
    }
  });
};
