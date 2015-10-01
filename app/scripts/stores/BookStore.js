var Reflux = require('reflux');

var BookActions = require('./../actions/BookActions');
var db = require('./../../config/Pouch');

var defaultData = {
  title: 'Never ending story',
  description: 'Let us hope this story never ends.'
}

var BookStore = Reflux.createStore({
  listenables: [BookActions],
  onGetBooks: function() {
    db.allDocs({
      include_docs: true
    }).then(function (result) {
      this.bookList = result;
    }).catch(function(err) {
      console.log(err);
    });
  },
  onCreateDefaultBook: function(){
    db.post({
      title: defaultData.title,
      description: defaultData.description,
    }).then(function (response) {
      BookStore.updateBookList();
    }).catch(function (err) {
      console.log(err);
    });
  },
  onEditBook: function(bookId, bookData) {
    // fetch book by id
    // update book with bookData
    // BookStore.updateBook(); <- trigger book
  },
  onAddBook: function(bookData){
    db.post({
      title: bookData.title,
      description: bookData.description,
    }).then(function (response) {
      BookStore.updateBookList();
    }).catch(function (err) {
      console.log(err);
    });
  },
  onRemoveBook: function(bookId) {
    db.get(bookId).then(function(doc) {
      return db.remove(doc);
    }).then(function (result) {
      BookStore.updateBookList();
    }).catch(function (err) {
      console.log(err);
    });
  },
  updateBookList: function() {
    db.allDocs({
      include_docs: true
    }).then(function (result) {
      var bookList = createBookListFromResult(result);
      BookStore.trigger(bookList);
    }).catch(function(err) {
      console.log(err);
    });
  },

  init: function() {
    this.bookList = new Array();
    db.allDocs({
      include_docs: true
    }).then(function (result) {
      var bookList = createBookListFromResult(result);
      BookStore.trigger(bookList);
    }).catch(function(err) {
      console.log(err);
    });
    console.log('BookStore initialized');
  }
});

var createBookListFromResult = function(result){ 
  var bookList = new Array();
  result.rows.forEach(function(row) {
    bookList.push(row.doc);
  });
  return bookList;
}

var createBookObj = function(bookData, response){
  var book = new Object();
  book._id = response.id;
  book._rev = response.rev;
  book.title = bookData.title;
  book.description = bookData.description;
  return book;
}



module.exports = BookStore;
