const { getPathFromRoot } = require("../utils/main_utils")

require("electron-packager")({
  dir: getPathFromRoot(""),
  name: "sniper-go",
  out: getPathFromRoot("dist"),
  overwrite: true,
  ignore: [
    "node_modules",
    "build",
    ".git"
  ],
  asar:true,
  platform: process.platform === "win32" ? "win32" : "mas"
}).then((pathList) => {
  require("zip-a-folder").zip(pathList[0], getPathFromRoot("dist/sniper-go.zip")).then(() => {
    console.log("zip done")
  })
})