const jwt = require('jsonwebtoken')
const { crypto: config } = require('../../config')

const signOptions = {
  algorithm: 'HS256',
  expiresIn: config.jwt.duration,
}

const sign = payload =>
  jwt.sign(payload,
    config.jwt.password,
    signOptions
  )

const verify = token => new Promise((resolve, reject) =>
  jwt.verify(
    token,
    config.jwt.password,
    (error, data) => error ? reject(error) : resolve(data)
  )
)

module.exports = {
  sign,
  verify,
}
