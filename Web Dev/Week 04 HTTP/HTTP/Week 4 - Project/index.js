const fs = require("fs")

const express = require('express')
const app = express()

// route handlers
// / route for get method
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.post('/', function (req, res) {
  res.send('Hello World from the post endpoint')
})

// /asd route for get method
app.get('/asd', function (req, res) {
  res.send('Hello there how are you')
})

app.listen(3000) // which port u want to send