module.exports = {

  before: config => {
    global.dump = require('./dump')
    if (config && config['sharp-pad'] && config['sharp-pad'].port) {
      global.dump.port = config['sharp-pad'].port
    }
  }

  beforeEach: config => {
    dump.clear()
  }

}
