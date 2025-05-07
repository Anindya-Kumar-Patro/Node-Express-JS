const express = require('express')
const { restraurant } = require('./express/data')
const app = express()

app.get('/', (req, res) => {
    res.status(200).send('Home Page')
})

app.get('/api/restraurant/:id', (req, res) => {
    console.log(req.params.id)
    const restraurantCurrent = restraurant.find((restrau) => restrau.id === parseInt(req.params.id))
    // console.log(restraurantCurrent)
    // res.json(restraurantCurrent)
    if (!restraurantCurrent) {
        return res.status(404).send('Product Does not Exist')
    }
    return res.json(restraurantCurrent)
})

app.get('/api/v1/query', (req, res) => {
    // console.log(req.query)
    // res.send('Hello World')
    const {search, limit} = req.query
    let restraurantNew = [...restraurant]
    if (search) {
        restraurantNew = restraurantNew.filter((restrau)=> {
            return restrau.name.startsWith(search)
        })
    }
    if (limit) {
        restraurantNew = restraurantNew.slice(0, Number(limit))
    }
    res.status(200).json(restraurantNew)
})

app.use((req, res) => {
    res.status(404).send('Resource not found')
})

app.listen(5001, ()=>{
    console.log('Server is listening on port 5000 .....')
})