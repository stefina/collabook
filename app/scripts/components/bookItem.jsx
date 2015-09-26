var React = require('react');

var BookItem = React.createClass({
  propTypes: {
    isComplete: React.PropTypes.bool.isRequired,
    id: React.PropTypes.number
  },

  render: function() {

    return (
      <li>
          <div>
            <input ref="editInput" className="edit" valueLink={this.linkState('editValue')} onKeyUp={this.handleValueChange} />
          </div>
          <input id="new-book" placeholder="What is the title of your book?" autoFocus onKeyUp={this.handleValueChange}/>
      </li>
    );
  }
});

module.exports = BookItem;
