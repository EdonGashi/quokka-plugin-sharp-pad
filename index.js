module.exports = {

  before: config => {
    const dump = require('sharp-pad-dump')
    global.dump = dump
    global.$ = dump
    dump.hook('$', true)
    dump.source = false
    if (config && config['sharp-pad'] && config['sharp-pad'].port) {
      dump.port = config['sharp-pad'].port
    }
  },

  beforeEach: config => {
    dump.clear()
  }

}
