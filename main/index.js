// Modules to control application life and create native browser window
const { app, BrowserWindow, ipcMain, Tray, Menu } = require("electron");
const listen = require("./message");
const width = 350;
const height = 600;

module.exports = function() {
  // Keep a global reference of the window object, if you don't, the window will
  // be closed automatically when the JavaScript object is garbage collected.
  let mainWindow;

  app.dock.hide();

  function createWindow() {
    // Create the browser window.
    mainWindow = new BrowserWindow({
      title: "Fast Task",
      width,
      height,
      resizable: false,
      frame: false,
      show: false
    });

    // and load the index.html of the app.
    mainWindow.loadFile("./dist/index.html");

    // Open the DevTools.
    // mainWindow.webContents.openDevTools();

    mainWindow.setVisibleOnAllWorkspaces(true);

    // Emitted when the window is closed.
    mainWindow.on("closed", function() {
      // Dereference the window object, usually you would store windows
      // in an array if your app supports multi windows, this is the time
      // when you should delete the corresponding element.
      mainWindow = null;
    });

    mainWindow.on("blur", hideWindow);

    listen();

    const contextMenu = Menu.buildFromTemplate([
      { label: "Item1", type: "radio" },
      { label: "Item2", type: "radio" },
      { label: "Item3", type: "radio", checked: true },
      { label: "Item4", type: "radio" }
    ]);
    const tray = new Tray("./assets/icon.png");
    tray.on("click", showWindow);
    tray.on("right-click", () => {
      tray.popUpContextMenu(contextMenu);
    });
    tray.setToolTip("This is my application.");
    // tray.setContextMenu(contextMenu);
  }

  function showWindow(e, bounds) {
    const x = bounds.x + bounds.width / 2 - width / 2;
    const y = bounds.y + bounds.height;
    mainWindow.setPosition(x, y);
    mainWindow.show();
  }

  function hideWindow() {
    mainWindow.hide();
  }

  // This method will be called when Electron has finished
  // initialization and is ready to create browser windows.
  // Some APIs can only be used after this event occurs.
  app.on("ready", createWindow);

  // Quit when all windows are closed.`
  app.on("window-all-closed", function() {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== "darwin") {
      app.quit();
    }
  });

  app.on("activate", function() {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
      createWindow();
    }
  });
};
