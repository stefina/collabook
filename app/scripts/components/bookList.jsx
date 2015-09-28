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
    // this.state.editValue; // because of the linkState call in render, this is the contents of the field
    // we pressed enter, if text isn't empty we blur the field which will cause a save
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
      <input id="bookTitle" onKeyUp={this.handleValueChange} />
    </div>
    );
  }
});

module.exports = BookList;
