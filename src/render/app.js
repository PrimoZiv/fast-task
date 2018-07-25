const { ipcRenderer } = require("electron");

new Vue({
  el: "#app",
  data: {
    info: "快速任务"
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
