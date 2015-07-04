var React = require("react");

var NotesList = React.createClass({
	render: function(){
		var notes = this.props.notes.map(function(note, index){
			return <li className="list-group-item">{note}</li>;
		});
		return(
				<ul className="list-group-item">
					{notes}
				</ul>
			);
	}
});

module.exports = NotesList;
