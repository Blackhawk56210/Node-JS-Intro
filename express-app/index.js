// require our express library
const express = require('express');
const path = require("path")
const PORT = 8888

const app = express() // initializing express inside of a app variable

app.use(express.static(path.join(__dirname, "public")));

/**
 * @description: health check to see if server is running
 * 
 */
app.get("/ping", function(req, res) {
    console.log("req =", req.ip);
    console.log("req =", req.headers['sec-ch-ua-platform']);
    return res.send("pong");
})

app.get("/get-info", function(req, res) {
    console.log('hit get info')
    res.status(200).send({
        name: "colby",
        age: "23",
        skills: "cooking"
})
})

app.listen(PORT, function() {
    console.log("server running at port:", PORT)
})
