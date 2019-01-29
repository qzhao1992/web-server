const express = require('express');
const app = express();


app.listen(3000, () =>{
    console.log("'Server is running at port 3000");
})

app.get('/', (req, res) =>{
     console.log('request to / is made');
     console.log(req.hostname);
     console.log(req.method);
     console.log(req.path);
     console.log(req.protocol);
     console.log(req.query);
     console.log(req.header);
     let responseInfo = `
        <html>
            <head>
                <title>Request Information</title>
            </head>
            <body>
                Hostname: ${req.hostname} <br>
                Method: ${req.method} <br>
                Path: ${req.path} <br>
                Protocol: ${req.protocol} <br>
                Query: ${JSON.stringify(req.query)} <br>
                Headers: ${JSON.stringify(req.header)} <br>
            </body>
        </html>
     `;

     res.send(responseInfo)
});

const myUtil = require('./myUtils.js');
console.log("myUtil", myUtil)

app.get('/sum', (req, res) =>{
    console.log("request to  /sum is made");
    const start = parseInt(req.query.start);
    const end = parseInt(req.query.end);
    
    let responseInfo = `
    <html>
        <head>
            <title>Request Information</title>
        </head>
        <body>
            <h3>
                Sum of integers from ${start} to ${end} is ${myUtil.fn.sum(start, end)}. <br>
                Add: ${start} + ${end} = ${myUtil.fn.add(start, end)}. <br>
            </h3>
        </body>
    <html>
 `;
 res.send(responseInfo);
})

app.get('/clock', (req, res) =>{
    const data = new Date();
    
    let page = `
    <html>
        <head>
            <title>Request Information</title>
        </head>
        <body>
            <h1>${data}
        </body>
    <html>
 `;
 res.header("Refresh", 1)
 res.send(page);
})

app.get('/cs', (req, res) =>{
   res.redirect('http://cs.uco.edu');
})




