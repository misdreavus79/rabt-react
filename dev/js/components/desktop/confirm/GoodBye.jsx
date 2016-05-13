import React from "react";
import CTA from "CTA";

class GoodBye extends React.Component{
	render(){
		return(
	       <article>
				<section className="cPrimary group">
					<h1>See you soon!</h1>
					<p>Get a head start now &mdash; create a Macy's Registry online or 
						explore all of our perks &amp; pluses. There's so much to love!</p>
					<CTA />
				</section>
			</article>
		)
	}
}

export default GoodBye;