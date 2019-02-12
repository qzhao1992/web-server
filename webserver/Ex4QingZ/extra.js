const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use('/public', express.static(__dirname + '/public'));

app.use(express.urlencoded({extended: false}))

app.listen(PORT,() =>{
    console.log(`server is running ${PORT}`);
})

let username = "qing";
let password = "111"

app.get('/login', (req, res) =>{
   res.sendFile(__dirname + '/public/html/extraLogin.html');
});

app.post('/auth', (req, res) =>{
    const userid = req.body.userid;
    const pwd = req.body.pwd;
    
    let page = `
        <html>
        <link rel="stylesheet" href="/public/css/extra.css">
            <body>
                <div style="border-style: solid; width: 300px; height: 150px;" align="center">
                <p style="color:red">Not Authroized</p>
                
                <br>
                <br>
                <form action='/login'>
                    <button class="buttonRed" type='submit'>Try Again</button>
                </form>
                
                </div>
            </body>
        </html>
    `;

    if(userid == username && password == pwd){
        res.redirect('/selectColor');
    }
    else{
        res.send(page);
    }
    
    
})

app.get('/selectColor', (req, res) =>{
    res.sendFile(__dirname + '/public/html/colorPicker.html');
});



app.post('/color', (req, res) =>{
    const color = req.body.color;
    
    console.log(color)
    let page = `
        <html>
        <link rel="stylesheet" href="/public/css/extra.css">
            <body>
                <div style="border-style: solid; width: 300px; height: 150px;" align="center">
                <p style="color:${color}">Nice Color</p>
                
                <br>
                <br>
                <form action='/selectColor'>
                    <button class="buttonRed" type='submit'>Back</button>
                </form>
                
                </div>
            </body>
        </html>
    `;
    res.send(page);
})


app.post('/color', (req, res) =>{
    const color = req.body.color;
    
    console.log(color)
    let page = `
        <html>
        <link rel="stylesheet" href="/public/css/extra.css">
            <body>
                <div style="border-style: solid; width: 300px; height: 150px;" align="center">
                <p style="color:${color}">Nice Color</p>
                
                <br>
                <br>
                <form action='/selectColor'>
                    <button class="buttonRed" type='submit'>Back</button>
                </form>
                
                </div>
            </body>
        </html>
    `;
    res.send(page);
})