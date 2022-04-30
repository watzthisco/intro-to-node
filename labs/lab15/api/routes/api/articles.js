const express = require('express')
const router = express.Router()
let {generateUniqueId} = require('../../model/Article')

router.get('/:slug', (req, res) => {
    let slug = req.params.slug
    console.log(slug)
    res.send('http://localhost:3000/articles GET method')
})

router.post('/', (req, res) => {
    let slug = generateUniqueId() 
    let title = req.body.title
    let description = req.body.description
    let body = req.body.body
    let tagList = req.body.tagList
    let author = req.body.author
    console.log(`${slug} ${title}, ${description} ${body} ${tagList} ${author}`)
    res.location(`http://localhost:3000/articles/${slug}`)
    res.send('http://localhost:3000/articles POST method')
})

router.put('/:slug', (req, res) => {
    let slug = req.params.slug
    console.log(`slug : ${slug}`)
    let author = req.body
    console.log(`author : ${author}`)
    res.send('http://localhost:3000/articles PUT method')
})

// router.delete('/:slug', (req, res) => {
//     let test = true
//     if(test) {
//         res.send("Article deleted")
//     } else {
//         res.send('Artice not found')
//     }    
// })

// router.delete('/:slug', (req, res) => {
//     let test = false
//     if(test) {
//         res.status(204).send("Article deleted")
//     } else {
//         res.sendStatus(404)
//     }    
// })

router.delete('/:slug', (req, res) => {
    let test = false
    if(test) {
        res.send({sucess: "Record deleted."})
    } else {
        res.status(404).json({error : "File not found"})
    }    
})


module.exports = router