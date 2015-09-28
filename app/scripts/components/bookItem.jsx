var React = require('react/addons');

var BookItem = React.createClass({
  propTypes: {
    id: React.PropTypes.string,
    key: React.PropTypes.string,
    title: React.PropTypes.string,
    description: React.PropTypes.string
  },
  mixins: [React.addons.LinkedStateMixin],

  render: function() {
    var id = this.props._id;
    var key = this.props._rev;
    var title = this.props.title;
    var description = this.props.description;

    return (
      <li>
          <div>{title}</div>
          <div>{description}</div>
          {/*<input ref="editInput" className="edit" valueLink={this.linkState('editValue')} onKeyUp={this.handleValueChange} /> */}
      </li>
    );
  }
});

module.exports = BookItem;
