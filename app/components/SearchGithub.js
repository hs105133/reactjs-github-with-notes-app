var React = require("react");
var Router = require("react-router");

var SearchGithub = React.createClass({
	mixins: [Router.Navigation],
	handleSubmit: function(){
		var username = this.refs.username.getDOMNode().value;
		this.refs.username.getDOMNode().value = '';
		this.transitionTo("profile", {username: username});
	},
	render: function(){
		return(
			<form className="navbar-form navbar-right" onSubmit={this.handleSubmit}>
				<input type="text" className="form-control" ref="username" placeholder="search user" />
				<button type="submit" className="btn btn-primary">Search Github User</button>
			</form>
		);
	}
});

module.exports = SearchGithub;