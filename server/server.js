const express = require('express');
const cors = require('cors');

const db = require('./db');
const entryRouter = require('./routes/entry-router');

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors());

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connection Successful')
})

app.get('/', (req, res) => {
    res.status(200).send('Pomodoro Keeper API')
})

app.post('/login', (req, res) => {
    res.status(200).send('This is to POST a login')
})

app.post('/register', (req, res) => {
    res.status(200).send('This is to POST a register')
})

app.use('/entries', entryRouter)

app.listen(PORT, () => {console.log(`Listening on ${PORT}`)});