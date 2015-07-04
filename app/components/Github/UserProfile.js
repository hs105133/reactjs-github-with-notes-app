var React = require("react");

var UserProfile = React.createClass({
	propTypes: {
		username: React.PropTypes.string.isRequired,
		bio: React.PropTypes.object.isRequired
	},
	render: function(){
		return(
				<div className="well">
					<h2> User Profile </h2>
					Username: { this.props.username } <br />
					Bio: { this.props.bio } 
				</div>
			);
	}
});

module.exports = UserProfile;
