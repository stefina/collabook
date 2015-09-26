var PouchDB = require('pouchdb'),
    db = new PouchDB('http://localhost:5984/collabook', {
      db : require('pouchdb-find')
    });

module.exports = db;