var React = require("react");

var UserProfile = React.createClass({
	propTypes: {
		username: React.PropTypes.string.isRequired,
		bio: React.PropTypes.object.isRequired
	},
	render: function(){

		return(
				<div className="well">
					<h3> User Profile </h3>
					<ul className="list-group">
					{this.props.bio.avatar_url && <li className="list-group-item"><img src={this.props.bio.avatar_url} className="img-responsive thumbnail"/></li>}
					{this.props.bio.name && <li className="list-group-item">Name: {this.props.bio.name}</li>}
					{this.props.bio.login && <li className="list-group-item">Login: {this.props.bio.login}</li>}
					{this.props.bio.email && <li className="list-group-item">Email: {this.props.bio.email}</li>}
					{this.props.bio.location && <li className="list-group-item">Location: {this.props.bio.location}</li>}
					{this.props.bio.company && <li className="list-group-item">Company: {this.props.bio.company}</li>}
					{this.props.bio.blog && <li className="list-group-item">Blog: <a href={this.props.bio.blog} target="_blank">{this.props.bio.blog}</a></li>}
					</ul>
				</div>
			);
	}
});

module.exports = UserProfile;
