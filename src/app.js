import React from "react";
import ReactDOM from 'react-dom';
import ContactsList from 'ContactsList';

class App extends React.Component {
	render(){
		return (
			<section>
				<h1>Contacts List</h1>
				<ContactsList />
			</section>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('pageContainer'));