import React from "react";

class Header extends React.Component {
	constructor(){
		super();
		this.state = {
			ppp: 'waiting'
		};
	}
	render(){
		return (
			<section className="cHead">
				<h1>Book your in-store registry appointment online</h1>
				<p>It's quick & easy—just click to see availability, pick a date & come on in for expert tips, advice for the perfect list & more.</p>
			</section>
		)
	}

}

export default Header;