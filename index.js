
const express = require('express');
const app = express();
const port = 8084;

app.get('/',(request, response) => {
    response.send(`Welcome to my forst node app.`);
    console.log(`Welcome`);

});
app.listen(port, () => {
    console.log(`App is running...`);

});

// go to CMD and run - 
// NPM start 