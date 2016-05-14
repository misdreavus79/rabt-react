import React from "react";
import MobileStates from 'MobileStates';

class MobileLocations extends React.Component {
	render(){
		return (
			<section className="cLocations">
				<h2>We are currently booking dates online for:</h2>
				<ul>
					{
						this.props.locations.map((single) => {	
							return <MobileStates state={single} key={single.state} /> 
						})
					}
				</ul>
			</section>
		)
	}
}

export default MobileLocations;
