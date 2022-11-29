const express = require("express");

const app = express();
const port = process.env.port || 3000;

app.use(express.static(__dirname + "/files"));
app.get("/", function (request, response) {
  response.sendFile(__dirname + "/index.html");
});

app.listen(port);
console.log("Server started at http://localhost:" + port);
