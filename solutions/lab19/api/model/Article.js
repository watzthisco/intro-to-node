var data = [{
    slug: "125011",
    title: "How to do Something",
    description: "An article about doing something",
    body: "this is the body",
    tagList: "something",
    author: "unknown"
},
{
    slug: "126553",
    title: "What is REST?",
    description: "An article about REST services",
    body: "REST is an acronym for REpresentational State Transfer and an architectural style for distributed hypermedia systems. Roy Fielding first presented it in 2000 in his famous dissertation. Like other architectural styles, REST has its guiding principles and constraints. These principles must be satisfied if a service interface needs to be referred to as RESTful",
    tagList: "REST",
    author: "James Bond"
},
{
    slug: "077516",
    title: "Express JS - body parser and why may not need it",
    description: "Explain what is body parser",
    body: "JSON is an open standard file format and data interchange format that uses human-readable text to store and transmit data objects consisting of attribute–value pairs and arrays. It is a common data format with diverse uses in electronic data interchange, including that of web applications with servers.",
    tagList: "JSON",
    author: "Wikipedia"
}
]

// Define and implement the Article templare function
function Article(slug, title, description, body, tagList, author) {
    this.slug = slug
    this.title = title
    this.description = description
    this.body = body
    this.tagList = tagList
    this.author = author
}

// define the DataUtility template function
function DataUtility() {
    this.findAll = function () {
        return data
    }

    this.findOne = function (slug) {
        result = false
        if (isSlugPresent(slug)) {
            let foundArticle = findArticleBySlug(data, slug)
            return result = foundArticle
        } else {
            throw error
        }
    } 

    this.save = function (newData) {
        slug = '' + generateUniqueId() + ''
        newData.slug = slug
        data.push(newData)
        return data
    }

    this.delete = function (slug) {
        let result = null;
        if (isSlugPresent(slug)) {
            data = findAndRemove(data, slug)
            return data
        } else {
            throw error
        }
    }

    this.update = function (slug, userData) {
        if (isSlugPresent(slug)) {
            let foundArticle = findArticleBySlug(data, slug)
            let updatedArticle = Object.assign(foundArticle, userData)
            findAndReplace(data, slug, updatedArticle)
            return updatedArticle           
        } else {
            throw error
        }
    }
}

// Given Helper Functions
function generateUniqueId() {
    const ID = require("nodejs-unique-numeric-id-generator")
    return ID.generate(new Date().toJSON());
}

function isSlugPresent(slug) {
    let result = data.filter((data) => data.slug == slug)
    if (result.length !== 0) {
        return true
    } else {
        return false
    }
}

function findArticleBySlug(data, slug) {
    let foundIndex = data.findIndex(data => data.slug == slug);
    foundArticle = data[foundIndex]
    return foundArticle
}

function findAndRemove(data, slug) {
    const removeIndex = data.findIndex(data => data.slug == slug);
    data.splice(removeIndex, 1);
    return data;
}

function findAndReplace(data, slug, newArticle) {
    const removeIndex = data.findIndex(data => data.slug == slug);
    data.splice(removeIndex, 1);
    data.push(newArticle)
    //return data;
}

// DO NOT MODIFY
module.exports = { Article, DataUtility, generateUniqueId }