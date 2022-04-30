const express = require('express')
const articles = require('./routes/api/articles')
const app = express()

app.use(express.json())
app.use('/articles', articles)

app.get('/', (req, res) => {
    res.send('This is the home page')
})

const server = app.listen(process.env.port || 3000, () => {
    console.log('Listening on port ' + server.address().port)
})