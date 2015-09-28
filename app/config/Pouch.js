var BookActions = require('./../scripts/actions/BookActions');

var PouchDB = require('pouchdb'),
    remoteDB = new PouchDB('http://localhost:5984/collabook', {
      remoteDB : require('pouchdb-find')
    }),
    localDB = new PouchDB('collabook');

localDB.sync(remoteDB, {
  live: true,
  retry: true
}).on('complete', function () {
  console.log("yay, we're in sync!");
}).on('change', function (change) {
  console.log("yo, something changed!");
  if(change && change.direction && change.direction === "push"){
    BookActions.updateBooks(change.change.docs[0]);  
  }
}).on('paused', function (info) {
  console.log("replication was paused, usually because of a lost connection");
}).on('active', function (info) {
  console.log("replication was resumed");
}).on('error', function (err) {
  console.log("boo, we hit an error!");
}).catch(function(err) {
  console.log(err);
});

// module.exports = localDB;
module.exports = localDB;