import React from "react";

class MobileStore extends React.Component {
	render(){
		return (
			<li>
				{this.props.location.store_name} in {this.props.location.city}
			</li>
		)
	}
}

export default MobileStore;