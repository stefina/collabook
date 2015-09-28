var Reflux = require('reflux');

var BookActions = Reflux.createActions([
    "addBook",
    "removeBook",
    "editBook",
    "getBooks",
    "createDefaultBook",
    "updateBooks"
]);

module.exports = BookActions;