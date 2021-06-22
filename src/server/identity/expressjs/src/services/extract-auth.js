const Buffer = require('buffer').Buffer

module.exports = function(authorization) {
  const credentials = Buffer
    .from(authorization.split(' ')[1], 'base64')
    .toString('utf-8')
    .split(':')
  const username = credentials[0]
  const password = credentials[1]
  return { username, password }
}
