var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Reflux = require('reflux');

var Header = require('./Header'),
    Footer = require('./Footer');
    bookStore = require('./../stores/BookStore')

var CollabookApp = React.createClass({
  mixins: [Reflux.connect(bookStore,"bookList")],
  getInitialState: function() {
    return {
      bookList: []
    };
  },
  render: function() {

    return (
      <div className="App">
        <Header />
        <RouteHandler list={this.state.bookList} />
        <Footer />
      </div>
    );
  }
});

module.exports = CollabookApp;
