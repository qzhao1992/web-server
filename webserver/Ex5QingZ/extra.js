const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

//setting which template engine we use with express
app.set('view engine', 'ejs');
//set location of ejs files
app.set('views', './ejsviews');

app.use(express.urlencoded({extended: false}))
app.use('/public', express.static(__dirname + '/public'));

let username = "q@uco.edu";
let password = "111";
let auth = false;

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`)
});



app.post('/login', (req, res) =>{
    console.log(req.body.email)
    console.log(req.body.password)
    console.log(req.body.cbox)
    res.render('home',userobj);
});


// app.get('/', (req, res) =>{
//     res.render('extra/extraHome', {nav: 'product', auth: auth});
// });

app.get('/', (req, res) =>{
    res.render('extra/extraChurch', {nav: 'church', auth: auth});
});

app.get('/dance', (req, res) =>{
    res.render('extra/extraDance', {nav: 'dance', auth: auth});
});

app.post('/schedule', (req, res) =>{
    if(req.body.email == username && req.body.password == password){
        auth = true;
    }
   
    const schedule = {
        schedule: [
            {date: "Mon", class:["IOT", "Software Architecture Design"]},
            {name: "Tue", class:["Webserver"]},
            {name: "Wed", class:["Software Architecture Design"]},
            {name: "Thu", class:["Webserver"]}
        ]
    };
    // res.render('home',schedule);
    // 
    if(auth == false){
        res.render('extra/extraLogin');    
    }else{
        res.render('extra/extraSchedule', {nav: 'schedule', auth: auth, schedule:schedule.schedule});
    }
    
});

app.get('/schedule', (req, res) =>{
    if(req.body.email == username && req.body.password == password){
        auth = true;
    }
   
    const schedule = {
        schedule: [
            {date: "Mon", class:["IOT", "Software Architecture Design"]},
            {date: "Tue", class:["Webserver"]},
            {date: "Wed", class:["Software Architecture Design"]},
            {date: "Thu", class:["Webserver"]}
        ]
    };
    // res.render('home',schedule);
    // 
    if(auth == false){
        res.render('extra/extraLogin');    
    }else{
        res.render('extra/extraSchedule', {nav: 'schedule', auth: auth, schedule:schedule.schedule});
    }
    
});

