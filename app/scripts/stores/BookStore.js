var Reflux = require('reflux');

var data = [];

var BookStore = Reflux.createStore({

  init: function() {
    console.log('BookStore initialized');
    // This funciton will be called when the store will be first initialized
  }

});

module.exports = BookStore;
