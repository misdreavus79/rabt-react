import React from "react";

class Ads extends React.Component{
	render(){
		return(
			<section className="ads">
				<a href="http://www1.macys.com/registry/wedding/m/top10-registry?cm_sp=imp-_-registryappointmentbookingtool-_-thankyou_top10reasons_checkitout">
					<img src={this.props.assets + "/images/ad1.png"} alt="Top 10 reasons to love your Macy's Registry" />
				</a>
				<a href="http://www1.macys.com/shop/womens-clothing/the-wedding-shop?id=68223&cm_sp=imp-_-registryappointmentbookingtool-_-thankyou_weddingshop_shopnow">
					<img src={this.props.assets + "/images/ad2.png"} alt="The Wedding Shop" />
				</a>
				<a href="http://www1.macys.com/shop/wedding-registry/dining-entertaining/registry-guide?id=70529&edge=hybrid&cm_sp=imp-_-registryappointmentbookingtool-_-thankyou_registryguide_learnmore">
					<img src={this.props.assets + "/images/ad3.png"} alt="The Registry Guide" />
				</a>
			</section>
		)
	}
}

export default Ads;