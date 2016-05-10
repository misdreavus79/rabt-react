import React from "react";
import ReactDOM from 'react-dom';
import ContactsList from 'ContactsList';
import $ from 'jquery';
import EventsFinder from 'Events';

class Main extends React.Component {
	render(){
		return (
			<section>
				<h1>Stores List</h1>
				<ContactsList contacts={this.props.contacts} />
			</section>
		)
	}
}

let contacts = [];

$.ajax({
	url: 'http://dev.mcomnyapps.net/events/?service=feed_events2&event_id=3&noheader=1',
	dataType: "jsonp",
    jsonpCallback: "cmsCallback",
    contentType: 'application/json',
	success: function(data){
		contacts = data.events;
		ReactDOM.render(<App contacts={contacts} />, document.getElementById('pageContainer'));
	},
	error: function(){
		console.log('error');
	}
});

