// const express = require('express')

// const app = express()


// app.listen(3000, () => {
//     console.log('Listening on port 3000')
// })
// solution above is  until step 11


const express = require('express')

const app = express()

app.get('/', (req, res) => {
    req.send('Hello World!')
})

const server = app.listen(process.env.port  || 3000, () => {
    console.log('Listening on port ' + server.address().port)
})