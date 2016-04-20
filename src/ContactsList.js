import React from "react";
import Contact from 'Contact';

class ContactsList extends React.Component {
	constructor(){
		super();
		this.state = {
			search: ''
		};
	}
	updateSearch(e){
		this.setState({
			search : e.target.value
		})
	}
	render(){
		let filteredContacts = this.props.contacts.filter((single) => { return single.store_name.toLowerCase().includes(this.state.search.toLowerCase()); });
		return (
			<section class="ppp">
				<input type="text" value={this.state.search} onChange={this.updateSearch.bind(this)} />
				<ul>
					{filteredContacts.map((single) => {	return <Contact contact={single} key={single.event_id} /> })}
				</ul>
			</section>
		)
	}
}

export default ContactsList;
