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
  getInitialState: function() {
      return {};
  },
  handleDelete: function() {
    BookActions.removeBook(this.props.id);
  },
  handleEdit: function() {
    BookActions.editBook(this.props.id, { 
      title : this.refs.editTitleValue.getDOMNode().value,
      description : this.refs.editDescriptionValue.getDOMNode().value
    });
  },
  render: function() {
    var id = this.props._id;
    var key = this.props._rev;
    var title = this.props.title;
    var description = this.props.description;

    return (
      <li>
          <input ref="editTitleValue" className="edit" defaultValue={title} valueLink={this.linkState('editTitleValue')}/>
          <input ref="editDescriptionValue" className="edit" defaultValue={description} valueLink={this.linkState('editDescriptionValue')}/>
          <button id="updateBook" onClick={this.handleEdit}> Update </button>
          <button id="deleteBook" onClick={this.handleDelete}> X {title}</button>
      </li>
    );
  }
});

module.exports = BookItem;
