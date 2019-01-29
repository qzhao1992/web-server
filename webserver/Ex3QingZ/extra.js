const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

//custom script
const extraUtil = require('./extraUtils.js');

app.use('/public', express.static(__dirname + '/public'))
app.listen(PORT, () =>{
    console.log(`Server is running at port ${PORT}`);
})

app.get('/extra', (req,res) =>{
    res.sendFile(__dirname + '/public/html/profile.html');
})

app.get('/activity', (req, res) =>{
    const first = req.query.first;
    const last = req.query.last;
    
    let responseInfo = `
    <html>
        <head>
            <title>Activity</title>
        </head>
        <body>
            <h3>
                This is ${extraUtil.extra.name(first, last)}. Welcome to Life.Church <br>
                ${extraUtil.extra.getImage()}
            </h3>
        </body>
    <html>
 `;
 res.send(responseInfo);
})