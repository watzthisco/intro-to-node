// const express = require('express')

// const app = express()


// app.listen(3000, () => {
//     console.log('Listening on port 3000')
// })
// solution above is  until step 11


const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('This is the home page')
})

app.get('/articles', (req, res) => {
    res.send('http://localhost:3000/articles GET method')
})

app.post('/articles', (req, res) => {
    res.send('http://localhost:3000/articles POST method')
})

app.put('/articles', (req, res) => {
    res.send('http://localhost:3000/articles PUT method')
})

app.delete('/articles', (req, res) => {
    res.send('http://localhost:3000/articles DELETE method')
})

const server = app.listen(process.env.port  || 3000, () => {
    console.log('Listening on port ' + server.address().port)
})