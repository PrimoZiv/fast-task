const { ipcRenderer } = require("electron");

const CMD = require("../../constants");

function fetch(cmd, params) {
  return ipcRenderer.sendSync("message", { cmd, params });
}

export function getList(type) {
  return fetch(CMD.GET_LIST, type);
}

export function addTodo(data) {
  return fetch(CMD.ADD_TODO, data);
}

export function changeStatus(id) {
  return fetch(CMD.CHANGE_TODO, id);
}
