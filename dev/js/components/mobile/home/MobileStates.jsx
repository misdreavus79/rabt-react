import React from "react";
import MobileStore from "Store";

class MobileStates extends React.Component {
	render(){
		return (
			<li className="stateContainer">
				<span className="state">{this.props.state.state}</span>
				<ul>
					{
						this.props.state.stores.map((single) => {	
							return <MobileStore location={single} key={single.city} /> 
						})
					}
				</ul>
			</li>
		)
	}
}

export default MobileStates;
