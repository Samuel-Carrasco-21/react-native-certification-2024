const { initializeApp } = require('firebase-admin/app');
const { credential, firestore } = require('firebase-admin');
const firebaseSetup = require('./firebase_setup.json');

initializeApp({
    credential: credential.cert(firebaseSetup),
    //databaseURL: 'https://c-instagram-default-rtdb.firebaseio.com/'
});

const db = firestore();

module.exports = db;