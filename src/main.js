const {
  BrowserWindow, app, screen,
  globalShortcut
} = require("electron")
const path = require("path")

app.on("ready", () => {
  const currentScreen = screen.getDisplayNearestPoint(screen.getCursorScreenPoint())
  console.log("currentScreen ",currentScreen)
  const side = 10
  const bw = new BrowserWindow({
    x: parseInt(currentScreen.size.width) / 2,
    // y: parseInt(currentScreen.size.height) / 2,
    y: 0,
    width: side,
    // width: currentScreen.size.width,
    height: side,
    // height: currentScreen.size.height,
    transparent: true,
    enableLargerThanScreen: true,
    frame: false,
    movable: false,
    resizable: false
  })
  bw.loadFile(path.join(__dirname, "index.html"))
  bw.setAlwaysOnTop(true)
})