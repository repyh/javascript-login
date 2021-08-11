const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use(express.static("assets"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
})

app.get("/login", (req, res) => {
    res.sendFile(__dirname + "/views/login.html");
})

app.listen(PORT, () => {
    console.log("Server is now online!");
})