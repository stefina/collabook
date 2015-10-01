var React = require('react');


var BookStore = require('./../stores/BookStore'),
    BookActions = require('./../actions/BookActions');

var BookForm = React.createClass({

  handleSubmit: function(evt) {
    BookActions.addBook({ 
      title : this.refs.bookTitle.getDOMNode().value,
      description : this.refs.bookDescription.getDOMNode().value
    });
  },
  renderTextInput: function(id, label) {
    return this.renderField(id, label,
      <input type="text" className="form-control" id={id} ref={id}/>
    );
  }, 
  renderField: function(id, label, field) {
    return (
      <div>
        <label htmlFor={id} >{label}</label>
        <div>
          {field}
        </div>
      </div>
    );
  },
  renderTextArea: function(id, label) {
    return this.renderField(id, label,
      <textarea id={id} ref={id} />
    );
  },

  render: function() {

    return (
      <div>
        <h3>Create a new book-title:</h3>
        {this.renderTextInput('bookTitle', 'title of your book')}
        {this.renderTextArea('bookDescription', 'describe what the book will be about')}
        <button type="button" onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
});

module.exports = BookForm;
