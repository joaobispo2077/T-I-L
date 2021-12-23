const auth = require('../services/auth')

const authenticate = async ctx => {
  const { email, password } = ctx.request.body
  const {
    accessToken,
    refreshToken,
    refreshTokenExpiration,
  } = await auth.authenticate({ email, password })

  ctx.cookies.set('refreshToken', refreshToken, {
    httpOnly: true,
    expires: refreshTokenExpiration,
  })

  ctx.body = {
    accessToken,
  }
}

const refreshToken = async ctx => {
  const cookieRefreshToken = ctx.cookies.get('refreshToken')
  const { accessToken, refreshToken, refreshTokenExpiration } = await auth.refreshToken(
    cookieRefreshToken)

  ctx.cookies.set('refreshToken', refreshToken, {
    httpOnly: true,
    expires: refreshTokenExpiration,
  })

  ctx.body = {
    accessToken,
  }
}

const logout = async ctx => {
  const { allDevices } = ctx.request.body

  const cookieRefreshToken = ctx.cookies.get('refreshToken')

  await auth.logout(cookieRefreshToken, allDevices)

  ctx.cookies.set('refreshToken', null, {
    httpOnly: true,
    expires: new Date(0),
  })

  ctx.body = {
  }
}

module.exports = {
  authenticate,
  refreshToken,
  logout,
}
