const {
  BrowserWindow, app, screen,
  globalShortcut
} = require("electron")
const path = require("path")

app.on("ready", () => {
  const currentScreen = screen.getDisplayNearestPoint(screen.getCursorScreenPoint())
  const side = 8
  console.log("currentScreen ",currentScreen)

  const bw = new BrowserWindow({
    // fullscreen:true,
    // x: parseInt(currentScreen.size.width) / 2,
    x: parseInt(currentScreen.size.width) / 2,
    y: parseInt(currentScreen.size.height) / 2,
    // y: 0,
    width: side,
    // width: currentScreen.size.width,
    height: side,
    // height: currentScreen.size.height,
    transparent: true,
    enableLargerThanScreen: true,
    frame: false,
    movable: false,
    resizable: false,
    webPreferences: {
      nodeIntegration: true
    },
    focusable: false
  })
  bw.loadFile(path.join(__dirname, "index.html"))
  bw.setAlwaysOnTop(true)
  bw.setVisibleOnAllWorkspaces(true)
  // bw.webContents.openDevTools({
  //   mode:"detach"
  // })

  globalShortcut.register("F9", () => {
    bw.isVisible() ? bw.hide() : bw.show()
  })
  globalShortcut.register("F10", () => {
    app.exit()
  })
})