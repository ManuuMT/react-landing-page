import React from "react";
import FooterCta from "./FooterCta.jsx";
import FooterDescription from "./FooterDescription.jsx";
import FooterContact from "./FooterContact.jsx";
import FooterCopy from "./FooterCopy.jsx";

const Footer = () => {
	return (
		<div className="container-fluid bg-black">
			<div className="container px-5">
				<FooterCta />
				<FooterDescription />
				<FooterContact />
				<FooterCopy />
			</div>
		</div>
	);
};

export default Footer;
