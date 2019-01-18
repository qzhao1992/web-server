const express = require('express');
const app = express();

app.listen(3000, () =>{
    console.log("Server is running at port 3000")
})

app.get('/',(req, res) => {
    res.send("Hello World!")
})

app.get('/user', (req, res) => {
    res.send("User Home page is here !!!")
})