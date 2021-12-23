require('dotenv').config()

const database = require('./database')
const server = require('./server')
const crypto = require('./crypto')
const authorization = require('./authorization')

module.exports = {
  database,
  server,
  crypto,
  authorization,
}
