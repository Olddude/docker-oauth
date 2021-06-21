const console = require('console')
const process = require('process')
const app = require('./src/app')
const port = process.env.HTTP_PORT || 3001
app.listen(port, () => {
  console.log(`starting identity server on port: ${port}`)
})
