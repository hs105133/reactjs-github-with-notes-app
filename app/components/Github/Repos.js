var React = require("react");

var Repos = React.createClass({
	propTypes: {
		username: React.PropTypes.string.isRequired,
		repos: React.PropTypes.array.isRequired
	},

	render: function(){
		return(
				<div className="well">
					<h2> Repos </h2>
					Username: { this.props.username } <br />
					Repos: { this.props.repos.join(", ") } 
				</div>
			);
	}
});

module.exports = Repos;
