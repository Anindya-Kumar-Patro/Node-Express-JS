const express = require('express')
const { restraurant } = require('./express/data')
const app = express()

// Middleware - similar to a function
const logger = (req, res, next) => {
    const method = req.method
    const url = req.url
    console.log(method, url)
    next() // Necessary as without this page wont load
}

app.get('/', logger, (req, res)=>{
    res.send('Home Page')
})

app.get('/about', logger, (req, res)=>{
    res.send('About Page')
})

app.listen(5001, ()=>{
    console.log('Server is listening on port 5000 .....')
})