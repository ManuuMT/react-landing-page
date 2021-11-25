import React from "react";

import heroPic from "../../img/hero-pic-modified.jpg";
import gridDots from "../../img/pattern-dot-grid.svg";

const Intro = () => {
	return (
		<section className="container-fluid bg-black d-flex align-items-center">
			<div className="container">
				{/* Componente 1 */}
				<div className="row">
					<div className="col-lg-6 col-md-12 col-sm-12">
						<h3 id="intro-name">Hola, Soy Manu Maldonado</h3>
						<h1 id="intro-title">
							Te ayudo a crecer tu negocio con tecnologías de
							primera.
						</h1>
						<div className="d-flex flex-row align-items-center">
							<a href="#" className="scroll-button">
								Haz scroll para conocerme
							</a>
							<div className="line-intro mx-2"></div>
						</div>
					</div>
				</div>
				{/* Componente 2 */}
				<div className="container">
					<img
						src={heroPic}
						className="hero-pic img-fluid"
						alt="hero"
					/>
					{/* <img
						src={gridDots}
						className="dots-pic img-fluid"
						alt="Dots"
					/> */}
				</div>
			</div>
		</section>
	);
};

export default Intro;
