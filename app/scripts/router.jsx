var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var Layout = require('./components/layout');
var Home = require('./components/home');
var Book = require('./components/book');
var Author = require('./components/author');

var routes = (
	<Route name="layout" path="/" handler={Layout}>
		<DefaultRoute handler={Home} />
		<Route path="book" handler={Book} />
		<Route path="author" handler={Author} />
	</Route>
);

exports.start = function() {
  
  Router.run(routes, function (Handler) {
		React.render(<Handler />, document.getElementById('content'));
	});
}
