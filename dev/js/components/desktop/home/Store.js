import React from "react";

class Store extends React.Component {
	render(){
		return (
			<li>
				{this.props.location.store_name} in {this.props.location.city}
			</li>
		)
	}
}

export default Store;