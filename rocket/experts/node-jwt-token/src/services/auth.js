const users = require('./user')
const crypto = require('./crypto')
const token = require('./token')

// illustration purposes only
// for production-ready code, use error codes/types and a catalog (maps codes -> responses)

/* eslint-disable prefer-promise-reject-errors */
const authFailed = email => Promise.reject({
  status: 401,
  code: 'UNAUTHENTICATED',
  message: `Failed to authenticate user ${email}`,
})

const authenticate = async ({ email, password }) => {
  const user = await users.findByEmail(email)
  if (!user) {
    return authFailed(email)
  }
  const isMatch = await crypto.compare(password, user.password)
  if (!isMatch) {
    return authFailed(email)
  }

  const tokenPayload = {
    id: user.dataValues.id,
    role: user.dataValues.role,
  }

  return token.sign(tokenPayload)
}

module.exports = {
  authenticate,
}
