const express = require('express')
const { restraurant } = require('./express/data')
const app = express()

app.get('/', (req, res) => {
    res.json(restraurant)
})

app.use((req, res) => {
    res.status(404).send('Resource not found')
})

app.listen(5001, ()=>{
    console.log('Server is listening on port 5000 .....')
})