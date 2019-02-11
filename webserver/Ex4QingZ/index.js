const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use('/public', express.static(__dirname + '/public'));

// to read data
app.use(express.urlencoded({extended: false}))

app.listen(PORT,() =>{
    console.log(`server is running ${PORT}`);
})

app.get('/', (req, res) =>{
    const id = req.query.id;
    const userid = req.query.userid;
    let page = `
        <html>
            <body>
                You sent ID = ${id} <br>
                You sent USERID = ${userid}
            </body>
        </html>
    `;
    res.send(page);
});

app.get('/login', (req, res) =>{
    res.sendFile(__dirname + '/public/html/login.html');
});

app.get('/help', (req,res) =>{
    const name = req.query.name;
    const age = req.query.age;
    let page = `
        <html>
            <body>
                You name is ${name}, and you are ${age} old
            </body>
        </html>
    `;
    res.send(page);
})

app.post('/home', (req, res) =>{
    const userid = req.body.userid;
    const password = req.body.passwd;
    console.log(userid, password)
    let page = `
        <html>
            <body>
                You userid is  ${userid} <br>
                You password is ${password}
            </body>
        </html>
    `;
    res.send(page);
})
