import { Transform } from 'node:stream'

const customReporter = new Transform({
  writableObjectMode: true,
  transform(event, encoding, callback) {
    switch (event.type) {
      case 'test:start':
        callback(null, `test ${event.data.name} started\n`)
        break
      case 'test:pass':
        callback(null, `test ${event.data.name} passed\n`)
        break
      case 'test:fail':
        callback(null, `test ${event.data.name} failed\n`)
        break
      case 'test:plan':
        callback(null, 'test plan')
        break
      case 'test:diagnostic':
        callback(null, event.data.message)
        break
    }
  },
})

export default customReporter
