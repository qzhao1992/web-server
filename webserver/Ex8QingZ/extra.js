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
    const image = req.body.image
    const title = req.body.title;
    const price = req.body.price;
    const count = req.body.count;
    const description = req.body.description;
    sc.add({_id, title, price});
    req.session.sc = sc.serialize();

    //update database
    const query = {_id: database.ObjectID(_id)};
    const newValue = {$set: {image, title, price, description, count}}

    app.locals.bookCollection.updateOne(query, newValue)
        .then(result =>{
            // res.redirect('/admin/home');
            res.redirect('/showcart');
        })
        .catch(error =>{
            res.render('errorPage', {source: '/admin/update(POST)', error})
        });

    // res.redirect('/showcart');
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

app.get('/admin/home', (req, res) =>{
    app.locals.bookCollection.find({}).toArray()
        .then(books => {
            res.render('admin/home', {books, utils});
        })
        .catch(error =>{
            res.render('errorPage', {source: '/admin/home', error})
        })
})

app.get('/admin/insert', (req, res) => {
    res.render('admin/insert');
})

app.post('/admin/insert', (req, res) => {
    const image = req.body.image;
    const title = req.body.title;
    const price = req.body.price;
    const description = req.body.description;
    const book = {image, title, price, description};

    app.locals.bookCollection.insertOne(book)
        .then(result => {
            res.redirect('/admin/home');
        })
        .catch(error =>{
            res.render('errorPage', {source: '/admin/insert', error});
        })
    // res.send("DONE")
})

app.get('/admin/update', (req, res) =>{
    const _id = req.query._id;
    app.locals.bookCollection.find({_id: database.ObjectID(_id)}).toArray()
        .then(books =>{
            console.log(books[0]);
            if(books.length != 1){
                throw `Found ${books.length} books for EDIT`;
            }
            res.render('admin/update', {book: books[0]});
        })
        .catch(error =>{
            res.render('errorPage', {source: '/admin/update', error})
        });
})

app.post('/admin/update', (req, res) =>{
    const _id = req.body._id;
    const image = req.body.image;
    const title = req.body.title;
    const price = req.body.price;
    const count = req.body.count;
    const description = req.body.description;
    
    const query = {_id: database.ObjectID(_id)};
    const newValue = {$set: {image, title, price, description, count}}
    // const book = {image, title, price, description};

    app.locals.bookCollection.updateOne(query, newValue)
        .then(result =>{
            res.redirect('/admin/home');
        })
        .catch(error =>{
            res.render('errorPage', {source: '/admin/update(POST)', error})
        });
})

app.post('/admin/delete', (req, res) =>{
    const _id = req.body.id;
    console.log(_id)
    const book2del = {_id: database.ObjectID(_id)}
    app.locals.bookCollection.deleteOne(book2del)
        .then(result =>{
            res.redirect('/admin/home');
        })
        .catch(error =>{
            res.render('errorPage', {source: '/admin/delete', error})
        });
})
