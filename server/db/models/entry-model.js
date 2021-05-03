const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Entry = new Schema (
    {
        name: String,
        type: String,
        startTime: { 
            type: Date,
            default: Date.now
        },
        endTime: { 
            type: Date,
        },
    },
    {timestamp: true}
)

module.exports = mongoose.model('Entry', Entry); 