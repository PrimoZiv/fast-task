const { ipcRenderer } = require("electron");
import Vue from "vue";
require("./style.css");

import App from "./App.vue";

new Vue({
  el: "#app",
  data: {},
  created() {
    setTimeout(() => {
      ipcRenderer.send("message", "hello");
    }, 5000);
    ipcRenderer.on("reply", (event, arg) => {
      console.log(arg);
    });
  },
  components: {
    App
  }
});
