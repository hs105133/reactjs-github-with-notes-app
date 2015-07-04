var React = require("react");
var RouteHandler = require("react-router").RouteHandler;

var Main = React.createClass({
	render: function(){
		return(
				<div className="container-fluid">
					<nav className="navbar navbar-default">
						<div className="navbar-header">
							<a className="navbar-brand" href="#">MENU</a>
						</div>
					</nav>
					<div className="container">
						<RouteHandler />
					</div>
				</div>
			);
	}
});

module.exports = Main;
