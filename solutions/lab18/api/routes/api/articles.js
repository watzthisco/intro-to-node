const express = require('express')
const router = express.Router()
let {generateUniqueId, DataUtility, Article} = require('../../model/Article')

router.get('/', (req, res) => {
    let utility = new DataUtility()
    let result = []
    result = utility.findAll()
    res.json({articles : result})
})

router.get('/:slug', (req, res, next) => {
    let slug = req.params.slug   
    let utility = new DataUtility();
    try {
        let foundArticle = utility.findOne(slug)
        res.json(foundArticle)
    } catch (error) {
        res.status(404).json({error : "File not found"})
    }    
})

router.post('/', (req, res) => {
    let slug = generateUniqueId() 
    let title = req.body.title
    let description = req.body.description
    let body = req.body.body
    let tagList = req.body.tagList
    let author = req.body.author
    let newArticle = new Article(slug, title, description, body, tagList, author)
    let utility = new DataUtility()
    utility.save(newArticle)
    res.location(`http://localhost:3000/articles/${slug}`)
    res.sendStatus(201)
    
})

router.put('/:slug', (req, res) => {
    let slug = req.params.slug
    console.log(`slug : ${slug}`)
    let author = req.body
    console.log(`author : ${author}`)
    res.send('http://localhost:3000/articles PUT method')
})

router.delete('/:slug', (req, res) => {
    let slug = req.params.slug
    let utility = new DataUtility();
    try {
        let result = utility.delete(slug)
        res.status(204).json({message: "success"})
    } catch (error) {
        res.status(404).json({error : "File not found"})
    }
})


module.exports = router