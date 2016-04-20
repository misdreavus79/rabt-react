import React from "react";

class Contact extends React.Component {
	render(){
		return (
			<li>
				{this.props.contact.address1} <br />
				{this.props.contact.address2} <br />
				{this.props.contact.city} <br />
				{this.props.contact.contact_email} <br />
				{this.props.contact.contact_phone} <br />
				{this.props.contact.date} <br />
				{this.props.contact.district} <br />
				{this.props.contact.end_time} <br />
				{this.props.contact.event_status} <br />
				{this.props.contact.floor} <br />
				{this.props.contact.phone} <br />
				{this.props.contact.region} <br />
				{this.props.contact.start_time} <br />
				{this.props.contact.state} <br />
				{this.props.contact.store_id} <br />
				{this.props.contact.store_name} <br />
				{this.props.contact.zip}
			</li>
		)
	}
}

export default Contact;
