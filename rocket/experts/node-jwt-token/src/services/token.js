const jwt = require('jsonwebtoken')

const sign = (payload) => jwt.sign(payload, 'secret')

const verify = (token) =>
  new Promise((resolve, reject) =>
    jwt.verify(token, 'secret', (error, data) =>
      error ? reject(error) : resolve(data)
    )
  )

module.exports = {
  sign,
  verify,
}
