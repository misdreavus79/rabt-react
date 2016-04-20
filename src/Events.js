import $ from 'jquery';


class EventsFinder{
	constructor(){
		this.events = [];
		$.ajax({
			url: 'http://dev.mcomnyapps.net/events/?service=feed_events2&event_id=3&noheader=1',
			dataType: "jsonp",
		    jsonpCallback: "cmsCallback",
		    contentType: 'application/json',
			success: (data) => {
				this.events = data.events;
			},
			error: () => {
				console.log('error');
			}
		});
	}
}

export default EventsFinder;