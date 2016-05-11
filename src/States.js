import React from "react";
import Store from "Store";

class States extends React.Component {
	render(){
		return (
			<li>
				{this.props.state.state}
				<ul>
					{
						this.props.state.stores.map((single) => {	
							return <Store location={single} key={single.city} /> 
						})
					}
				</ul>
			</li>
		)
	}
}

export default States;
