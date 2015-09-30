var React = require('react'),
    ReactRouter = require('./../router'),
    Reflux = require('reflux');

var BookStore = require('./../stores/BookStore'),
    BookActions = require('./../actions/BookActions'),
    BookItem = require('./BookItem');

var BookList = React.createClass({
  // mixins: [ 
  //   // ReactRouter.State, 
  //   Reflux.connect(BookStore,"bookList") 
  // ],
  propTypes: {
      bookList: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  },
  handleValueChange: function(evt) {
    var text = evt.target.value;
    if (evt.which === 13 && text) {
      var bookData = { 
        title : text,
        description : "default description"
      }
      BookActions.addBook(bookData);
    }
  },

  render: function() {
    var bookList = this.props.bookList;

    return (
    <div>
      <h1>Create a book!</h1>
      <ul id="todo-list">
        {bookList.map(function(book){
            return <BookItem title={book.title} id={book._id} key={book._rev} description={book.description}/>;
        })}
      </ul>
      Create a new book-title:
      <input id="bookTitle" onKeyUp={this.handleValueChange} />
    </div>
    );
  }
});

module.exports = BookList;
