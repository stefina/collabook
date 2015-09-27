var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var CollabookApp = require('./components/collabookApp');
var Home = require('./components/home');
var BookList = require('./components/bookList');
var Author = require('./components/author');

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
