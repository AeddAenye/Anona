function getSecretToken() {
    return require('crypto').randomBytes(32).toString('hex')
}

module.exports = getSecretToken