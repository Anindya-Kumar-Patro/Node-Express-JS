const express = require('express')
const { restraurant } = require('./express/data')
const app = express()

// Middle ware
const logger = require('./express/logger')

// Use middle ware for all the below routes
// Order is important, if this below line is
// Placed below / route then it wont be
// applicable for that route

// app.use(logger)

// this will add the middleware to all /api paths present
app.use('/api', logger)
// app.use([loggers, logger2]) --> incase multiple middlewares are there
// we can add in array, order is important as 

app.get('/', (req, res)=>{
    res.send('Home Page')
})

app.get('/about', (req, res)=>{
    res.send('About Page')
})

app.get('/api/products', (req, res)=>{
    res.send('Products Page')
})

app.listen(5001, ()=>{
    console.log('Server is listening on port 5000 .....')
})