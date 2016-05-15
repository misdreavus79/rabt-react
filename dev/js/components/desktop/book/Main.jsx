import React from "react";
import ReactDOM from 'react-dom';
import GoodBye from 'GoodBye';
import Ads from 'Ads';


class Main extends React.Component {
	constructor(){
		super();
		if(isProduction){
			this.state = {
				url: 'https://macysappt.herokuapp.com/book/?serviceCode=BRIDAL_REGISTRY',
				el: ''
			}
		}else{
			this.state = {
				url: 'https://macysappt-stage.herokuapp.com/book/?serviceCode=BRIDAL_REGISTRY',
				el: ''
			}
		}
	}
	componentDidMount(){
		this.setState({
			el: document.getElementById('formFrame')
		});
		window.addEventListener('message', (e) => {
			this.handleMessage(e, this.state.el);
		}, false);
	}
	handleMessage(evt, el){
		var obj = JSON.parse(evt.data),
			msgType = obj.msgType;
		if(msgType === 'MBA_READY') {	
			console.log("Message Ready to send up");
			el.contentWindow.postMessage('{ "msgType": "MBA_PARENTPAGE" }', '*');
		} else if(msgType === 'MBA_APPOINTMENT_BOOKED' || true) {
			let cal = obj.data;
			window.location = '/confirm';
		}
	}
	render(){
		return (
			<main role="main" className="book">
				<iframe src={this.state.url} width="100%" height="950" scrolling="yes" frameborder="0" id="formFrame"></iframe>
			</main>
		)
	}
}

if(!isMobile && document.getElementById('bookContainer')){
	ReactDOM.render(<Main />, document.getElementById('bookContainer'));
}
