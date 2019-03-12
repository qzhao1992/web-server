const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const ObjectID = mongodb.ObjectID;
const username = 'user';
const password = 'password';
const dbHost = 'localhost';
const dbPort = 27017;
const dbName = 'wsp';
const bookCollectionName = 'books';

const dbURL = `mongodb://${username}:${password}@${dbHost}:${dbPort}?authSource=${dbName}`;

let dbClient;
function startDBandApp(app, PORT) {
    MongoClient.connect(dbURL, {poolSize:20, useNewUrlParser: true})
        .then(client =>{
            dbClient = client
            app.locals.client = client;
            app.locals.wspDB = client.db(dbName);
            app.locals.bookCollection = app.locals.wspDB.collection(bookCollectionName);
            app.listen(PORT, () =>{
                console.log(`Server is running at ${PORT}`);
            });
        })
        .catch(err =>{
          console.log('DB connection error: ', err);  
        })
}

process.on('SIGINT', () =>{
    dbClient.close();
    console.log('db connection closed by SIGNT');
    process.exit();
})

module.exports.startDBandApp = startDBandApp;
module.exports.ObjectID = ObjectID;