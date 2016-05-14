import React from "react";
import ReactDOM from 'react-dom';
import MobileGoodBye from 'MobileGoodBye';
import MobileAds from 'MobileAds';


class MobileMain extends React.Component {
	render(){
		return (
			<main role="main" className="confirm">
				<img src="http://localhost:8080/dev/images/main-img-mobile.jpg" alt="Registry Appointment Booking" />
				<MobileGoodBye />
				<h2>Your list. Your Look. <br />Your "I do." We can help.</h2>
				<MobileAds />
			</main>
		)
	}
}

if(isMobile && document.getElementById('confirmContainer')){
	ReactDOM.render(<MobileMain />, document.getElementById('confirmContainer'));
}
