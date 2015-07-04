var React = require("react");

var AddNote = React.createClass({
	handleSubmit: function(){
		var note = this.refs.note.getDOMNode().value;
		this.refs.note.getDOMNode().value = '';
		this.props.addNote(note);
	},
	render: function(){
		return(
				<form onSubmit={this.handleSubmit}>
					<div className="input-group">
						<input type="text" className="form-control" ref="note" placeholder="new note" />
						<span className="input-group-btn">
							<button type="submit" className="btn btn-default">Add Note</button>
						</span>
					</div>
				</form>
			);
	}
});

module.exports = AddNote;
