const express = require('express');
const app = express();
const session = require('express-session');
const PORT = process.env.PORT || 3000;

const database = require('./database.js');
database.startDBandApp(app, PORT);
const utils = require('./utils.js');
const ShoppingCart = require('./model/ShoppingCart.js');
const stripe = require('./stripe.js');

app.set('view engine', 'ejs')
app.set('views', './ejsviews');

app.use('/public', express.static(__dirname + '/public'));
app.use(express.urlencoded({extended: false}));

app.use(session({
    secret: 'mysupersecretcode!!@#@!A',
    saveUninitialized: false,
    resave: false,
    cookie: {maxAge: 1000 * 60 * 60 *24}
}));



app.get('/', (req,res) => {
    app.locals.bookCollection.find({}).toArray()
        .then(books =>{
            res.render('storeFront', {books, utils})
        })
        .catch(error =>{
            res.render('errorPage', {source:'/', error});
        })
})

app.post('/', (req,res) => {
    console.log('token', req.body.stripeToken)
    console.log('amount', req.body)
    app.locals.bookCollection.find({}).toArray()
        .then(books =>{
            res.render('storeFront', {books, utils})
        })
        .catch(error =>{
            res.render('errorPage', {source:'/', error});
        })
})


app.post('/add2cart', (req, res) =>{
    let sc;
    if(!req.session.sc) {
        sc = new ShoppingCart();
    }else{
        sc = ShoppingCart.deserialize(req.session.sc);
    }
    const _id = req.body._id;
    const title = req.body.title;
    const price = req.body.price;
    sc.add({_id, title, price});
    req.session.sc = sc.serialize();

    res.redirect('/showcart');
})

app.get('/showcart', (req, res) =>{
    let sc;
    if(!req.session.sc) {
        sc = new ShoppingCart();
    }else{
        sc = ShoppingCart.deserialize(req.session.sc);
    }
    res.render('showcart', {sc, utils})
})

app.get('/checkout', (req, res) =>{
    stripe.customer;
    let sc;
    if(!req.session.sc) {
        sc = new ShoppingCart();
    }else{
        sc = ShoppingCart.deserialize(req.session.sc);
    }
    res.render('checkout', {sc, utils})
})
