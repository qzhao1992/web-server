const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cookieParser())

app.listen(PORT, () =>{
    console.log(`Server is running at port ${PORT}`)
});

let userId = 0;

app.get('/', (req,res) =>{
    // console.log('cookie received', req.cookies);
    if(!req.cookies.userId){
        ++userId;
        res.cookie('userId', userId);
        // console.log('cookie sent', userId);
    }
    res.cookie('sessioncookie', 'sessioncookie');
    res.cookie('persistentcookie10', 'persistent10', {maxAge: 10*1000 });
    res.cookie('persistentcookie20', 'persistent20', {maxAge: 20*1000 });
    res.cookie('persistentcookie30', 'persistent30', {maxAge: 30*1000 });
    res.send('Done');
});

app.get('/show', (req, res) =>{
    console.log("--------/show---------" )
    for(const prop in req.cookies){
        console.log(prop, req.cookies[prop]);
    }
    res.send('Show done')
})