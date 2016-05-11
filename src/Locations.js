import React from "react";
import States from 'States';

class Locations extends React.Component {
	render(){
		return (
			<section className="cLocations">
				<h2>WE ARE CURRENTLY BOOKING DATES ONLINE FOR:</h2>
				<ul>
					{
						this.props.locations.map((single) => {	
							return <States state={single} key={single.state} /> 
						})
					}
				</ul>
			</section>
		)
	}
}

export default Locations;
