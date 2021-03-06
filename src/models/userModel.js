const mongoose = require('mongoose')

var schema = mongoose.Schema(
    {
        userName: {
            type: String,
            require: true
        },
        passwordHash: {
            type: String,
            require: false
        },
        firstName: {
            type: String,
            require: true
        },
        lastName: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true
        },
        phoneNumber: {
            type: String,
            require: false
        },
    }
)
var User = mongoose.model('Users', schema);
module.exports = User