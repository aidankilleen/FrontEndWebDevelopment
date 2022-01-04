console.log("Node.js web server starting...");

const express = require('express');
const app = express();
const port = 3000;

app.get('/home', function(request, response) {
    response.send("Hello World");
});

app.listen(port, function() {
    console.log(`server started listening on port ${port}`);
})
