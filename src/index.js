const express = require('express');
const app = express();

app.get("/", function(request, response){
    response.send("Hello World!");
})

app.get("/users", function(request, response){
    const users = [];
    response.json(users);
})

app.listen(3000, function(){
    console.log("Server is running")
})