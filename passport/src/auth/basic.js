const BasicStrategy = require('passport-http').BasicStrategy

module.exports = new BasicStrategy(
    (username, password, cb) => {
        if (username === 'admin' && password === 'admin') {
            return cb(null, true)
        }
        return cb(null, false)
    }
)