import React from "react";
import ReactDOM from 'react-dom';
import ContactsList from 'ContactsList';
import $ from 'jquery';
import Header from 'Header';
import Supporting from 'Supporting';


class Main extends React.Component {
	render(){
		return (
			<main id="pageContainer" role="main">
				<Header />
				<ContactsList contacts={this.props.contacts} />
				<Supporting />
			</main>
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
		ReactDOM.render(<Main contacts={contacts} />, document.getElementById('bodyContainer'));
	},
	error: function(){
		console.log('error');
	}
});

