import React from "react";

const FooterContact = () => {
	return (
		<div className="container d-flex flex-row">
			<div className="col-6">
				<p>Llámame</p>
				<a href="">+34 653 22 33 65</a>
			</div>
			<div className="col-6">
				<p>Redes Sociales</p>
				<p>
					<a href="">Facebook</a>/<a href="">Linkedin</a>/
					<a href="">Github</a>
				</p>
			</div>
		</div>
	);
};

export default FooterContact;
