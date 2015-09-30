var Reflux = require('reflux');

var BookActions = Reflux.createActions([
    "addBook",
    "removeBook",
    "editBook",
    "getBooks",
    "createDefaultBook",
    "updateBook"
]);

module.exports = BookActions;