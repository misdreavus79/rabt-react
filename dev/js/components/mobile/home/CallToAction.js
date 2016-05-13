import React from "react";

class CallToAction extends React.Component{
	render(){
		return(
			<section className="cCTA">
				<a href="book/" className="button">book an appointment now</a>
				<p>
					<a href="https://www.macys.com/registry/wedding/registryhome" target="_blank" className="link">ACCESS YOUR REGISTRY</a>
					<a href="https://www.macys.com/registry/wedding/registryhome" target="_blank"  className="link">CREATE YOUR REGISTRY</a>
				</p>
				<p>Can't book a location above? <a href="http://www1.macys.com/shop/store/search?cm_sp=MWEDD-_-Registry-_-find%20a%20store%20near%20you" target="_blank" className="link locator">Find a store near you</a>.</p>
			</section>
		)
	}
}

export default CallToAction;