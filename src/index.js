const express = require('express');
const app = express();

let users = [];

app.get("/", function(request, response){
    response.send("Hello World!");
})

app.get("/users", function(request, response){
    response.json(users);
})

app.post('/user', function(request, response){
    users.push({id: users.length});
    response.json(users[users.length-1]);
})

app.get('/user/:id', function(request, response){
    const id = request.params.id;
    response.json(users[id]);
})

app.listen(3000, function(){
    console.log("Server is running")
})