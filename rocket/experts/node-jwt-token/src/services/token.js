const jwt = require('jsonwebtoken')

const sign = ({ id, role }) => jwt.sign({ id, role }, 'secret')

const verify = _ => new Promise((resolve, reject) => resolve(true))

module.exports = {
  sign,
  verify,
}
