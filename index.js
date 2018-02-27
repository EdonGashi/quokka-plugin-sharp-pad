module.exports = {

  before: config => {
    const dump = require('sharp-pad-dump')
    dump.hook('$', true)
    global.$ = '$'
    global.dump = dump
    dump.source = function (source, value, accessor) {
      if (!source || source.length > 30) {
        return null
      }

      if (value && value.$type === 'html') {
        return null
      }

      const index = source.indexOf('[$]')
      if (index !== -1) {
        return source.substring(0, index).trim()
      }

      return source
    }

    if (config && config['sharp-pad'] && config['sharp-pad'].port) {
      dump.port = config['sharp-pad'].port
    }
  },

  beforeEach: config => {
    dump.clear()
  }

}
