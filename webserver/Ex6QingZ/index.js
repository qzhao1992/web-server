const express = require('express');
const session = require('express-session');
const app = express();
const PORT = process.env.PORT || 3000;
const bookinfo = require('./model/book_db.js')
const ShoppingCart = require('./model/shoppingCart');

// const sc = new ShoppingCart();


app.set('view engine', 'ejs')
app.set('views', './ejsviews');

//middleware
app.use('/public', express.static(__dirname + '/public'));
app.use(session({
    secret: 'myscretestring',
    saveUninitialized: false,
    resave: false,
    cookie: {maxAge: 1000*60*60*24}
}));

app.listen(PORT, () =>{
    console.log(`Server is running at port ${PORT}`)
});

app.get('/', (req,res) =>{
    res.render('store', {bookinfo: bookinfo})
});

app.get('/add', (req, res) => {
    //req,session
    let sc;
    console.log("req.session.sc",req.session.sc)
    if(!req.session.sc){
        sc = new ShoppingCart();
    }else{
        sc = ShoppingCart.deserialize(req.session.sc)
        
    }
    const bookid = req.query.id;
    sc.add(bookid);
    req.session.sc = sc.serialize();
    res.render('showcart', {sc, bookinfo})
})

app.get('/show', (req, res) =>{
    let sc;
    if(!req.session.sc){
        sc = new ShoppingCart();
    }else{
        sc = ShoppingCart.deserialize(req.session.sc);
    }
    res.render('showcart', {sc, bookinfo});
})
