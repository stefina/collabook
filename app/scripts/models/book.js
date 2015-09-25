var pouchDB = require('./../../config/Pouch');

// ==== //
var BookModel;

var title = "";
var description = "";
var owner;
var authors;
var tags;
var status; 					// [final|open|voting]
var creationDate = new Date();
var timeToWrite;
var timeToVote;
var chapters;					// {Chapter}
var openChapters; 				// {Chapter}



module.exports = BookModel;