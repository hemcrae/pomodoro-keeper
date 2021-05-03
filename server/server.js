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

// app.get('/entries', (req, res) => {
//     res.status(200).send('Hello World, this is for entries')
// })

// app.get('/entries/:id', (req, res) => {
//     res.status(200).send('This is to GET entires by ID')
// })

// app.patch('/entries/:id', (req, res) => {
//     res.status(200).send('This is to EDIT an entry')
// })

// app.delete('/entries/:id', (req, res) => {
//     res.status(200).send('This is to DELETE an entry')
// })

// app.post('/entries/:id', (req, res) => {
//     res.status(200).send('This is to POST an entry')
// })

app.post('/login', (req, res) => {
    res.status(200).send('This is to POST a login')
})

app.post('/register', (req, res) => {
    res.status(200).send('This is to POST a register')
})

app.use('/entries', entryRouter)

app.listen(PORT, () => {console.log(`Listening on ${PORT}`)});