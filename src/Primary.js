import React from 'react';
import Title from "Title";
import Locations from "Locations";
import CallToAction from "CallToAction";

class Primary extends React.Component{
	render(){
		return(
			<article className="cPrimary">
				<Title />
				<Locations locations={this.props.locations} />
				<CallToAction />
			</article>
		)
	}
}

export default Primary;