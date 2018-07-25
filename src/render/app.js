const { ipcRenderer } = require("electron");

new Vue({
  el: "#app",
  data: {
    info: "app info"
  },
  created() {
    setTimeout(() => {
      ipcRenderer.send("message", "hello");
    }, 5000);
    ipcRenderer.on("reply", (event, arg) => {
      console.log(arg);
    });
  }
});
