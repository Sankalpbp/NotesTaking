'use strict'
// CRUD create read update and delete

const { MongoClient, ObjectID } = require('mongodb');

const id = new ObjectID();
console.log(id);
console.log(id.getTimestamp());
 
const connectionURL = 'mongodb://127.0.0.1/27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database');
    }

    const db = client.db(databaseName);

    db.collection('users').findOne({ _id: new ObjectID("5f0b1ce27d6617758e41cb81") }, (error, user) => {
        if (error) {
            return console.log('Unable to fetch user.');
        } 

        console.log(user);
    });

    db.collection('users').find({ age: 22 }).toArray((error, users) => {
        console.log(users);
    });

    db.collection('users').find({ age: 22 }).count((error, count) => {
        console.log(count);
    });
});