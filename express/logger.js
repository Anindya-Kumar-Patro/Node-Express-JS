const logger = (req, res, next) => {
    const method = req.method
    const url = req.url
    console.log(method, url)
    next() // Necessary as without this page wont load
}

module.exports = logger