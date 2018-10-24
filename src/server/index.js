const express = require("express");
const os = require("os");
const app = express();


app.use(express.static("dist"));

app.get("/", (req, res) =>
    res.sendfile('index.html')
);


app.listen(8081, () => console.log("Listening on port 8080!"));