const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8080;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200)
})

app.get('/entries', (req, res) => {
    res.status(200).send('Hello World, this is for entries')
})

app.get('/entries/:id', (req, res) => {
    res.status(200).send('This is to GET entires by ID')
})

app.patch('/entries/:id', (req, res) => {
    res.status(200).send('This is to EDIT an entry')
})

app.delete('/entries/:id', (req, res) => {
    res.status(200).send('This is to DELETE an entry')
})

app.post('/entries/:id', (req, res) => {
    res.status(200).send('This is to POST an entry')
})

app.post('/login', (req, res) => {
    res.status(200).send('This is to POST a login')
})

app.post('/register', (req, res) => {
    res.status(200).send('This is to POST a register')
})

app.listen(PORT, () => {console.log(`Listening on ${PORT}`)});