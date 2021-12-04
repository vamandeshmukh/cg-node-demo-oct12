
const express = require('express');
const app = express();
const port = 8084;
const axios = require('axios');

app.get('/', (request, response) => {
    response.send(`Welcome to my first node app.`);
    console.log(`Welcome`);
});

app.get('/emp', (request, response) => {
    axios.get('http://localhost:8082/getallemps')
        .then((res) => {
            response.send(res.data);
        })
        .catch((err) => {
            response.send(err);
        });
    console.log(`emp`);
});

app.get('/home', (request, response) => {
    response.send(`<h1>Home page</h1><p>Welcome to home page.</p>`);
    console.log(`home`);
});

app.get('/login', (request, response) => {
    response.send(`Welcome to login.`);
    console.log(`login`);
});

app.listen(port, () => {
    console.log(`App is running...`);
});

// go to CMD and run - 
// NPM start 
// go to browser and open 
// http://localhost:8084/ 
