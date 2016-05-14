import React from 'react';
import MobileLocations from "MobileLocations";
import MobileCallToAction from "MobileCallToAction";

class MobilePrimary extends React.Component{
	render(){
		return(
			<section className="cPrimary group">
				<h1>Book your in-store registry appointment online</h1>
				<p>It's quick & easy—just click to see availability, pick a date & come on in for expert tips, advice for the perfect list & more.</p>
				<MobileLocations locations={this.props.locations} />
				<MobileCallToAction />
			</section>
		)
	}
}

export default MobilePrimary;