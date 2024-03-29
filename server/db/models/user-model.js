const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema (
    {
        name: String,
        email: String,
        username: String,
    },
    {timestamp: true}
)

module.exports = mongoose.model('User', User); 