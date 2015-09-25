var Reflux = require('reflux');

var data = [];

var AuthorStore = Reflux.createStore({

  init: function() {
    console.log('AuthorStore initialized');
    // This funciton will be called when the store will be first initialized
  }

});

module.exports = AuthorStore;
