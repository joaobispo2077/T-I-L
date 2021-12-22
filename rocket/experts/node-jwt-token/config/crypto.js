const {
  JWT_PRIVATE_KEY,
  JWT_PUBLIC_KEY,
} = process.env

const REFRESH_TOKEN_EXPIRATION = 1000 * 60 * 60 * 24 * 7 // 7 days

module.exports = {
  hashSaltRounds: 10,
  jwt: {
    privateKey: JWT_PRIVATE_KEY,
    publicKey: JWT_PUBLIC_KEY,
  },
  refreshToken: {
    duration: REFRESH_TOKEN_EXPIRATION,
  },
}
