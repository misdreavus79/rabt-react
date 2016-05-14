import React from "react";

class Ads extends React.Component{
	render(){
		return(
			<section className="ads">
				<a href="http://www1.macys.com/registry/wedding/m/top10-registry">
					<img src="http://localhost:8080/dev/images/ad1.png" alt="Top 10 reasons to love your Macy's Registry" />
				</a>
				<a href="http://www1.macys.com/shop/womens-clothing/the-wedding-shop?id=68223">
					<img src="http://localhost:8080/dev/images/ad2.png" alt="The Wedding Shop" />
				</a>
				<a href="http://www1.macys.com/shop/wedding-registry/dining-entertaining/registry-guide?id=70529&edge=hybrid&cm_sp=reg_hdr-_-wedding-registry-_-70529_the-registry-guide_COL1">
					<img src="http://localhost:8080/dev/images/ad3.png" alt="The Registry Guide" />
				</a>
			</section>
		)
	}
}

export default Ads;