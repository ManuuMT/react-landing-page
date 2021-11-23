import React from "react";

const Intro = () => {
	return (
		<section className="container-fluid bg-black">
			<div className="container d-flex align-items-center container-content">
				<div className="container-fluid container-text">
					<div className="col-xl-6 col-lg-6 col-md-6">
						<h3 id="intro-name">Hola, Soy Manu Maldonado</h3>
						<h1 id="intro-title" className="h1 text-white">
							Te ayudo a crecer tu negocio con tecnologías de
							primera.
						</h1>
					</div>
					<div className="scroll-button mt-4">
						<a href="#" className="scroll-button-link">
							Haz scroll para conocerme
						</a>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="grid-points"></div>
				<div className="hero-pic"></div>
			</div>
		</section>
	);
};

export default Intro;
