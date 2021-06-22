const got = require('got')

module.exports = async function read() {
  const responseString = await got.get('http://localhost:9200/post/_search')
  const responseObject = JSON.parse(responseString)
  const response = Array.from(responseObject)
  return response
}
