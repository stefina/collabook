var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var CollabookApp = require('./components/CollabookApp');
var Home = require('./components/Home');
var BookList = require('./components/BookList');
var Author = require('./components/Author');

var routes = (
	<Route name="layout" path="/" handler={CollabookApp}>
		<DefaultRoute handler={Home} />
		<Route path="books" handler={BookList} />
		<Route path="authors" handler={Author} />
	</Route>
);

exports.start = function() {
  
  Router.run(routes, function (Handler) {
		React.render(<Handler />, document.getElementById('content'));
	});
}
