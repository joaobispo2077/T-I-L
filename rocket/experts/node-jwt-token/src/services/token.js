const jwt = require('jsonwebtoken')

const { crypto: config } = require('../../config')
const { privateKey, publicKey } = config.jwt

const signOptions = {
  algorithm: 'RS256',
  expiresIn: '1d',
}

const sign = (payload) => jwt.sign(payload, privateKey, signOptions)

const verify = (token) =>
  new Promise((resolve, reject) =>
    jwt.verify(token, publicKey, (error, data) =>
      error ? reject(error) : resolve(data)
    )
  )

module.exports = {
  sign,
  verify,
}
