const express = require('express')
const articles = require('./routes/api/articles')
const app = express()
const morgan = require('morgan')
const cors = require('cors')

app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())
app.use('/api', articles)  // change this

app.get('/', (req, res) => {
    res.send('This is the home page')
})

const server = app.listen(process.env.port || 3000, () => {
    console.log('Listening on port ' + server.address().port)
})