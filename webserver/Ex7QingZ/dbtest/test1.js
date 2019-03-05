const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const username = 'user';
const password = 'password';
const authDB = 'wsp';

const dbUrl = `mongodb://${username}:${password}@localhost:27017?authSource=${authDB}`;
MongoClient.connect(dbUrl,{poolSize: 20, useNewUrlParser: true},(err, client) =>{
    if(err){
        console.log(err);
        return;
    }
    console.log('connected to the server');
    const db = client.db('wsp');
    const collection = db.collection('books');
    collection.find({}).toArray()
    .then(docs => {
        console.log(docs)
    })
    .catch(err =>{
        console.log('find() error: ', err)
    })
})