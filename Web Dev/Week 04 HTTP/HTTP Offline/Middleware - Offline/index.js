const express = require('express');

const app = express();

// function that return a boolean if the age of the person is more than 14
function isOldEnough(age) {
    if (age >= 14) {
        return true;
    } else {
        return false;
    }
}


app.get("/ride1", function(req, res) {
    if (isOldEnough(req.query.age)) {
        resizeBy.json({
            msg: "You have successfully riden the ride 1"
        })
    } else {
        res.status(411).json({
            msg: "You are not old enough to ride this ride"
        })
    }
})

app.get("/ride2", function(req, res) {
    if (isOldEnough(req.query.age)) {
        resizeBy.json({
            msg: "You have successfully riden the ride 2"
        })
    } else {
        res.status(411).json({
            msg: "You are not old enough to ride this ride"
        })
    }
})

app.listen(3000);