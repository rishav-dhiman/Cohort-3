const express = require('express');

const app = express();


// app.use(isOldEnoughMiddleware); // another way of defining middlewares below this

app.get("/ride1", isOldEnoughMiddleware, function(req, res) {
    res.json({
        msg: "You have successfully riden the ride 1"
    })
})

app.get("/ride2", isOldEnoughMiddleware, function(req, res) {
    res.json({
        msg: "You have successfully riden the ride 2"
    })
})

app.listen(3000);