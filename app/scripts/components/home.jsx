var React = require('react');

var Home = React.createClass({

  render: function() {

    return (
      <div className="hero-unit">
        <h1>Create a book!</h1>
        <ul>
            <li><a href="/#/books">Books</a></li>
            <li><a href="/#/authors">Authors</a></li>
        </ul>
      </div>
    );
  }
});

module.exports = Home;
