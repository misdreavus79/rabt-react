import React from "react";

class MobileCallToAction extends React.Component{
	render(){
		return(
			<section className="cCTA">
				<a href="book/" className="button">book it now</a>
				<p>Can't book a location above?</p> 
				<a href="http://www1.macys.com/shop/store/search?cm_sp=MWEDD-_-Registry-_-find%20a%20store%20near%20you" target="_blank" className="button">Find a store near you</a>.
			</section>
		)
	}
}

export default MobileCallToAction;