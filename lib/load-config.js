const fs = require('fs')
const os = require('os')
const path = require('path')

const rcPath = path.join(os.homedir(), '.czrc')
module.exports = function loadConfig (res) {
  const pkg = ((res || {}).pkg || {}).config || {}
  let config = pkg['cz-conventional-kawaii']
  // check $HOME/.czrc
  if (fs.existsSync(rcPath)) {
    const content = fs.readFileSync(rcPath, 'utf-8')
    const cfg = JSON.parse(content)
    // local takes precedence over homedir config
    config = config || cfg['cz-conventional-kawaii']
  }
  return config || {}
}
