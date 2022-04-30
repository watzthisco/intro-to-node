const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('This is the home page')
})

app.route('/articles')
    .get((req, res) => {
        res.send('http://localhost:3000/articles GET method')
    })
    .post((req, res) => {
        res.send('http://localhost:3000/articles POST method')
    })
    .put((req, res) => {
        res.send('http://localhost:3000/articles PUT method')
    })
    .delete((req, res) => {
        res.send('http://localhost:3000/articles DELETE method')
    })

const server = app.listen(process.env.port || 3000, () => {
    console.log('Listening on port ' + server.address().port)
})