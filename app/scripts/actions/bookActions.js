var Reflux = require('reflux');

var BookActions = Reflux.createActions([
    "addBook",
    "removeBook",
    "editBook",
    "getBooks",
    "createDefaultBook",
    "addChapter"
]);

module.exports = BookActions;