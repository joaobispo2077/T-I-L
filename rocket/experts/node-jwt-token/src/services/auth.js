const users = require('./user')
const crypto = require('./crypto')
const tokenService = require('./token')

const isRefreshTokenValid = refreshToken => refreshToken && refreshToken.valid && refreshToken.expiresAt >= Date.now()

// illustration purposes only
// for production-ready code, use error codes/types and a catalog (maps codes -> responses)

/* eslint-disable prefer-promise-reject-errors */
const authFailed = email => Promise.reject({
  status: 401,
  code: 'UNAUTHENTICATED',
  message: email ? `Failed to authenticate user ${email}` : 'Failed to authenticates user',
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

  const accessToken = tokenService.sign(tokenPayload)
  const { refreshToken, refreshTokenExpiration } = await tokenService.createRefreshToken(user.id)

  return {
    accessToken,
    refreshToken,
    refreshTokenExpiration,
  }
}

const refreshToken = async (previousRefreshToken) => {
  const refreshToken = await tokenService.getRefreshToken(previousRefreshToken)

  if (isRefreshTokenValid(refreshToken)) {
    await tokenService.invalidateRefreshToken(previousRefreshToken)

    const user = await users.findById(refreshToken.user_id)

    const tokenPayload = {
      id: user.dataValues.id,
      role: user.dataValues.role,
    }

    const accessToken = tokenService.sign(tokenPayload)
    const { refreshToken: newRefreshToken, refreshTokenExpiration } = await tokenService.createRefreshToken(user.id)

    return {
      accessToken,
      refreshToken: newRefreshToken,
      refreshTokenExpiration,
    }
  }

  return authFailed()
}

module.exports = {
  authenticate,
  refreshToken,
}
