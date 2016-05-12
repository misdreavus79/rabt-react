import React from "react";

class Supporting extends React.Component{
	render(){
		return (
			<section className="cSupporting">
				<h2>TOP 3 REASONS TO COME SEE US</h2>
				<ul className="reasons group">
					<li>
						<p className="num">1</p>
						<h3>Your very own Registry Advisor</h3>
						<p>Get expert tips, gifting secrets &amp; advice when you need it the most.</p>
					</li>
					<li>
						<p className="num">2</p>
						<h3>Our newest &amp; most-wanted gifts</h3>
						<p>Have gifts right at your fingertips, so you can see, feel &amp; fall in love with what you list.</p>
					</li>
					<li>
						<p className="num">3</p>
						<h3>Know it all</h3>
						<p>Learn more about our exclusive registry programs, like <a href="https://www.macys.com/registry/wedding/m/dream-fund?cm_sp=reg_hdr-_-wedding-registry-_-dream-fund_COL1" target="_blank" className="link">Dream Fund</a>™ &amp; <a href="http://www1.macys.com/registry/wedding/m/perksprivileges?cm_sp=MWEDD-_-Registry-_-CHECK%20OUT%20THE%20DEALS" target="_blank" className="link">Perks &amp; Privileges</a>.
	</p>
					</li>
				</ul>
			</section>
		)
	}
}

export default Supporting;