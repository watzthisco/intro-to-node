const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('http://localhost:3000/articles GET method')
})

router.post('/', (req, res) => {
    res.send('http://localhost:3000/articles POST method')
})

router.put('/', (req, res) => {
    res.send('http://localhost:3000/articles PUT method')
})

router.delete('/', (req, res) => {
    res.send('http://localhost:3000/articles DELETE method')
})

module.exports = router