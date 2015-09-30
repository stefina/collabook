var React = require('react/addons'),
    BookActions = require('./../actions/BookActions');

var BookItem = React.createClass({
  propTypes: {
    id: React.PropTypes.string,
    key: React.PropTypes.string,
    title: React.PropTypes.string,
    description: React.PropTypes.string
  },
  mixins: [React.addons.LinkedStateMixin],

  handleDelete: function() {
    
    BookActions.removeBook(this.props.id);
  },
  render: function() {
    var id = this.props._id;
    var key = this.props._rev;
    var title = this.props.title;
    var description = this.props.description;

    return (
      <li>
          <div>{title}</div>
          <div>{description}</div>
          <button id="deleteBook" onClick={this.handleDelete}> X {title}</button>
          {/*<input ref="editInput" className="edit" valueLink={this.linkState('editValue')} onKeyUp={this.handleValueChange} /> */}
      </li>
    );
  }
});

module.exports = BookItem;
