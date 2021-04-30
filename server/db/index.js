const mongoose = require('mongoose');

mongoose
    .connect('mongodb+srv://pomodoro-keeper:ueWiW5tc801scbqj@cluster0.rafyt.mongodb.net/pomodoro-keeper?retryWrites=true&w=majority', 
            {useNewUrlParser: true},
            {useUnifiedTopology: true})
    .catch(e => { console.error('Error', e.message)
})

const db = mongoose.connection

module.exports = db