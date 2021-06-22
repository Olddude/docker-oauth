const got = require('got')

module.exports = async function read() {
  const elasticSearchResponse = await got.get('http://localhost:9200/post/_search')
  const elasticSearchResponseBody = JSON.parse(elasticSearchResponse.body)
  const hits = elasticSearchResponseBody.hits.hits.map(hit => hit._source)
  return Array.from(hits || [])
}
