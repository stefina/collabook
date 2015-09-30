var React = require('react');

var Footer = React.createClass({
  propTypes: {
      bookCount: React.PropTypes.number
  },
  render: function() {

    return (
      <footer id='footer'>
        <p>We found {this.props.bookCount} projects in the database.</p>
      </footer>
    );
  }
});

module.exports = Footer;
