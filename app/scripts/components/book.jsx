var React = require('react'),
    ReactRouter = require('./../router');

var BookStore = require('./../stores/BookStore'),
    BookActions = require('./../actions/BookActions'),
    BookItem = require('./BookItem');

var Book = React.createClass({
  mixins: [ ReactRouter.State ],
  propTypes: {
      list: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  },
  handleValueChange: function(evt) {
    var text = evt.target.value;
    // this.state.editValue; // because of the linkState call in render, this is the contents of the field
    // we pressed enter, if text isn't empty we blur the field which will cause a save
    if (evt.which === 13 && text) {
      console.log(text);
      BookActions.createDefaultBook();
    }
  },

  render: function() {
    var filteredList = this.props.list;

    return (
    <div>
      <h1>Create a book!</h1>
      <ul id="todo-list">
        { filteredList.map(function(book){
            return <BookItem title={book.title} id={book.key} key={book.key}/>;
        })}
      </ul>
      <input id="default-book" onKeyUp={this.handleValueChange}/>
    </div>
    );
  }
});

module.exports = Book;
