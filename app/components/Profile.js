var React = require("react");
var Router = require("react-router");
var UserProfile = require("./Github/UserProfile");
var Repos = require("./Github/Repos");
var Notes = require("./Notes/Notes");
var ReactFireMixin = require("reactfire");
var Firebase = require("firebase"); 
var helpers = require("../utils/helpers"); 

// https://shining-fire-4684.firebaseio.com/

var Profile = React.createClass({
	mixins: [Router.State, ReactFireMixin],
	getInitialState: function(){
		return{
			notes: [],
			bio: {},
			repos: ["repo 1", "repo 2"]
		};
	},
	handleAddNote: function(newNote){
		this.ref.child(this.getParams().username).set(this.state.notes.concat([newNote]));
	},
	init: function(){
		var ChildRef = this.ref.child(this.getParams().username);
		this.bindAsArray(ChildRef, 'notes');

		helpers.getGithubInfo(this.getParams().username)
			.then(function(res){
				this.setState({
					repos: res.repos,
					bio: res.bio
				});
			}.bind(this));
	},
	componentDidMount: function(){
		this.ref = new Firebase("https://shining-fire-4684.firebaseio.com");
		this.init();
	},
	componentWillUnmount: function(){
		this.unbind('notes');
	},
	componentWillReceiveProps: function(){
		this.unbind('notes');
		this.init();
	},
	render: function(){
		var username = this.getParams().username;
		return(
			<div className="row">
				<div className="col-sm-4">
					<UserProfile username={username} bio={this.state.bio} />
				</div>
				<div className="col-sm-4">
					<Repos username={username} repos={this.state.repos} />
				</div>
				<div className="col-sm-4">
					<Notes username={username} notes={this.state.notes} addNote={this.handleAddNote} />
				</div>
			</div>
		);
	}
});

module.exports = Profile;