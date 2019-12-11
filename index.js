//require any needed modules
let express = require('express');

// Declare our app variable
let app = express();

//Declare routes
app.get('/', (req, res) => {
    res.send('<h1>STUB HOME</h1>')
})

//Listen on a port
app.listen(3000)