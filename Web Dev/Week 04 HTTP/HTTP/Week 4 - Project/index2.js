const express = require('express')
const app = express()

let todos = [];
// store the data in a file, foundation for databases
// add user logic

app.post('/', function (req, res) {
    // extract the todo title from the body
    todos.push({
        title,
        id
    })
})

app.delete('/', function (req, res) {
    // extract the todo id
    // remove the todo from here
})

app.get()
app.listen(3000) // which port