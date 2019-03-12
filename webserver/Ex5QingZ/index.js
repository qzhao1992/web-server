const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

//setting which template engine we use with express
app.set('view engine', 'ejs');
//set location of ejs files
app.set('views', './ejsviews');

app.use(express.urlencoded({extended: false}))

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`)
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/html/index.html');
});

app.post('/login', (req, res) =>{
    console.log(req.body.email)
    console.log(req.body.password)
    console.log(req.body.cbox)
    const cboxmessage = req.body.cbox ? "You're checked!" : "You're not checked!!!";
    const userobj = {
        title: '<em> User Information Page</em>',
        email: req.body.email,
        password: req.body.password,
        cbox: req.body.cbox,
        skills: ["C++", "Java", "C", "JavaScript", "Cobol"],
        contacts: [
            {name: "John", age:25, gpa: 2.9},
            {name: "Mary", age:35, gpa: 4.0},
            {name: "Kelly", age:15, gpa: 3.2},
            {name: "Sue", age:22, gpa: 3.9}
        ]
    };
    res.render('home',userobj);
    // let page = `
    //     <html>
    //         <body>
    //             You logged in sucessfully!<br>
    //             Email: ${req.body.email} <br>
    //             Password: ${req.body.password} <br>
    //             Checkbox: ${cboxmessage} <br>
    //         </body>
    //     </html>
    // `;
    // res.send(page);
});

app.get('/storefront', (req, res) =>{
    res.render('storefront', {nav: 'storefront'});
});

app.get('/product', (req, res) =>{
    res.render('product', {nav: 'product'});
});

app.get('/customer', (req, res) =>{
    res.render('customer', {nav: 'customer'});
});