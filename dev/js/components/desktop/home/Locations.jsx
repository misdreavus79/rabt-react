import React from "react";
import States from 'States';

class Locations extends React.Component {
	render(){
		let firstHalf = this.props.locations.slice(0,4),
			secondHalf = this.props.locations.slice(4);
		return (
			<section className="cLocations">
				<h2>WE ARE CURRENTLY BOOKING DATES ONLINE FOR:</h2>
				<ul>
					{
						firstHalf.map((single) => {	
							return <States state={single} key={single.state} /> 
						})
					}
				</ul>
				<ul>
					{
						secondHalf.map((single) => {	
							return <States state={single} key={single.state} /> 
						})
					}
				</ul>
			</section>
		)
	}
}

export default Locations;
