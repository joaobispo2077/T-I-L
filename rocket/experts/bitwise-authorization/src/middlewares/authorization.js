const tokenService = require('../services/token')
const { validatePermissions } = require('../services/authorization')

const extractToken = ctx => {
  const authorization = ctx.headers.authorization || ''
  return authorization.replace('Bearer ', '')
}

module.exports = requiredPermissions =>
  async (ctx, next) => {
    const token = extractToken(ctx)

    const { permission } = tokenService.decode(token)

    if (!validatePermissions(permission, requiredPermissions)) {
      /* eslint-disable prefer-promise-reject-errors */
      return Promise.reject({
        status: 403,
        message: 'Insufficient permission',
        code: 'FORBIDDEN',
      })
    }

    await next()
  }
