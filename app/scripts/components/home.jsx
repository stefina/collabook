var React = require('react');

var Home = React.createClass({

  render: function() {

    return (
      <div className="hero-unit">
        <h1>Create a book!</h1>
        <ul>
            <li><a href="/#/book">Book</a></li>
            <li><a href="/#/author">Author</a></li>
        </ul>
      </div>
    );
  }
});

module.exports = Home;
