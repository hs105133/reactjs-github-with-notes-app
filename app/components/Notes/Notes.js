var React = require("react");
var NotesList = require("./NotesList");
var AddNote = require("./AddNote");

var Notes = React.createClass({
	propTypes: {
		username: React.PropTypes.string.isRequired,
		notes: React.PropTypes.array.isRequired
	},
	render: function(){
		return(
				<div className="well">
					<h3> Notes for {this.props.username }</h3>
					<AddNote username={this.username} addNote={this.props.addNote} />
					<NotesList notes={this.props.notes} />
				</div>
			);
	}
});

module.exports = Notes;
