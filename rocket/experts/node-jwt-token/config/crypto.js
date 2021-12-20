const {
  JWT_PRIVATE_KEY,
  JWT_PUBLIC_KEY,
} = process.env

module.exports = {
  hashSaltRounds: 10,
  jwt: {
    privateKey: JWT_PRIVATE_KEY,
    publicKey: JWT_PUBLIC_KEY,
  },
}
