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

app.delete('/user/:id', function(request, response){
    const id = request.params.id;
    if (id < users.length){
        response.status(202);
        response.json(users.splice(id,1));
    } else {
        response.status(204);
        response.end('There is no such user.')
    }

})

app.listen(3000, function(){
    console.log("Server is running")
})