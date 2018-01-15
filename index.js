var express = require('express')
var cors = require('cors')

var app = express()
app.use(cors())
app.get('/', (res, req) => {
    res.json('express app')
})
app.listen(3000, () => {
    console.log('Server listening on port:3000')
})