var React = require('react'),
    ReactRouter = require('./../router'),
    Reflux = require('reflux');

var BookStore = require('./../stores/BookStore'),
    BookActions = require('./../actions/BookActions'),
    BookItem = require('./BookItem'),
    BookForm = require('./BookForm');

var BookList = React.createClass({
  propTypes: {
      bookList: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
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
      <BookForm />
    </div>
    );
  }
});

module.exports = BookList;
