import React from "react";
import ReactDOM from 'react-dom';
import MobileNavLoader from 'MobileNavLoader';
import MobileGoodBye from 'MobileGoodBye';
import MobileAds from 'MobileAds';


class MobileMain extends React.Component {
	constructor(){
		super();
		this.state = {
			loader: new MobileNavLoader()
		}
	}
	componentWillMount(){
		window.MobileNavConfig = {
			footerContainer:"#ImpSdkFooterContainer",
			footer:true
		}
		this.state.loader.init();
	}
	render(){
		return (
			<main role="main" className="confirm">
				<img src="../../../../dev/images/main-img-mobile.jpg" alt="Registry Appointment Booking" />
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
