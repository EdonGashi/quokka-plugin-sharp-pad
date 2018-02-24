module.exports = {

  before: config => {
    const dump = require('./dump')
    global.dump = dump
    dump.source = false
    if (config && config['sharp-pad'] && config['sharp-pad'].port) {
      dump.port = config['sharp-pad'].port
    }
  },

  beforeEach: config => {
    dump.clear()
  }

}
