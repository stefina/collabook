var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Reflux = require('reflux');

var Header = require('./Header'),
    Footer = require('./Footer');
    BookStore = require('./../stores/BookStore')

var CollabookApp = React.createClass({
  mixins: [Reflux.connect(BookStore,"bookList")],
  getInitialState: function() {
    return {
      bookList: []
    };
  },
  render: function() {

    return (
      <div className="App">
        <Header />
        <RouteHandler bookList={this.state.bookList} />
        <Footer bookCount={this.state.bookList.length} />
      </div>
    );
  }
});

module.exports = CollabookApp;
