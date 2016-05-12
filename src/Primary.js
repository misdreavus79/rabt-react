import React from 'react';
import Title from "Title";
import Locations from "Locations";
import CallToAction from "CallToAction";

class Primary extends React.Component{
	render(){
		return(
			<article>
				<section className="cPrimary group">
					<Title />
					<Locations locations={this.props.locations} />
					<CallToAction />
				</section>
			</article>
		)
	}
}

export default Primary;