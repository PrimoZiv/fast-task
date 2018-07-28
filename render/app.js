const { ipcRenderer } = require("electron");
import Vue from "vue";
import iView from "iView";
import "iview/dist/styles/iview.css";
import "./style.css";

import App from "./App.vue";

Vue.use(iView);

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
