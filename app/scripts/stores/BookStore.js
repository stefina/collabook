var Reflux = require('reflux');

var BookActions = require('./../actions/bookActions');
var db = require('./../../config/Pouch');

var defaultData = {
  title: 'Never ending story',
  description: 'Let us hope this story never ends.'
}

var BookStore = Reflux.createStore({
  listenables: [BookActions],
  updateList: function(bookList){
    db.allDocs({
      include_docs: true
    }).then(function (result) {
      this.bookList = bookList;
      this.trigger(bookList); // sends the updated list to all listening components (TodoApp)
    }).catch(function(err) {
      console.log(err);
    });
  },
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
    db.put({
      _id: new Date().toISOString() + '_' + defaultData.title,
      title: bookData.title,
      description: bookData.description,
    }).then(function (response) {
      this.bookList = getAllBooks(); // ???
    }).catch(function (err) {
      console.log(err);
    });
  },
  onEditBook: function(bookId, bookData) {
    // fetch book by id
    // update book with bookData
  },
  onAddBook: function(bookData){
    db.put({
      _id: new Date().toISOString() + '_' + bookData.title,
      title: bookData.title,
      description: bookData.description,
    }).then(function (response) {
      console.log('saved this book: ' + response);
    }).catch(function (err) {
      console.log(err);
    });
  },
  onRemoveBook: function(bookdId) {
    // remove book by id
  },

  init: function() {
    console.log('BookStore initialized');
    db.put({
      _id: new Date().toISOString() + '_' + defaultData.title,
      title: defaultData.title,
      description: defaultData.description,
    }).then(function (response) {
      // getAllBooks(); // ???
    }).catch(function (err) {
      console.log(err);
    });
  }
});

var getAllBooks = function() {
  db.allDocs({
    include_docs: true
  }).then(function (result) {
    this.bookList = result;
    this.trigger(this.bookList);
  }).catch(function(err) {
    console.log(err);
  });
}



module.exports = BookStore;
