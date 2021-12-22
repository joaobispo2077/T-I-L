const jwt = require('jsonwebtoken')
const crypto = require('crypto')
const { crypto: config } = require('../../config')
const { privateKey, publicKey } = config.jwt
const { Token } = require('../models')

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

const createRefreshToken = async (userId) => {
  const refreshToken = `${userId}${crypto.randomBytes(64).toString('hex')}`
  const refreshTokenExpiration = new Date(Date.now() + config.refreshToken.duration)
  await Token.create({
    token: refreshToken,
    expiresAt: refreshTokenExpiration,
    user_id: userId,
    valid: true,
  })

  return { refreshToken, refreshTokenExpiration }
}

module.exports = {
  sign,
  verify,
  createRefreshToken,
}
