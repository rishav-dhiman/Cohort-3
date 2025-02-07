// creating an http server
// express
// node default library => no

// Request methods
    // GET
    // POST
    // PUT
    // DELETE

// Status codes
    // 200 OK
    // 404 Not Found
    // 500 Internal Server Error / Error
    // 411 Incorrect inputs
    // 403 Forbidden / Not allowed

const express = require("express");

const app = express();

function sum(n) {
    let ans = 0;
    for (let i = 1; i<=n; i++) {
        ans = ans + i;
    }
    return ans;
}

// req, res => request and response
app.get("/", function(req, res) {
    const n = req.query.n;
    const ans = sum(n);
    res.send("hi your ans is " + ans);
})

app.listen(3000);