import React from "react";
import ReactDOM from 'react-dom';
import GoodBye from 'GoodBye';
import Ads from 'Ads';


class Main extends React.Component {
	render(){
		return (
			<main role="main" className="confirm">
				<GoodBye />
				<h2>Your list. Your Look. Your "I do." We can help.</h2>
				<Ads assets={this.props.assets} />
			</main>
		)
	}
}

if(!isMobile && document.getElementById('confirmContainer')){
	ReactDOM.render(<Main assets="https://storage.googleapis.com/imp-projects/rabt" />, document.getElementById('confirmContainer'));
}
