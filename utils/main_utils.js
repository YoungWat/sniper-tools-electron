const path = require("path")

module.exports = {
  getPathFromRoot(str) {
    return path.join(__dirname, `../${str}`)
  }
}