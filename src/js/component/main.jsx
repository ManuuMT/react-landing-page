import React from "react";

//import PropTypes from "prop-types"
//importar estilos main.scss

//create your first component
const Main = () => {
	return (
		<section className="container-fluid bg-black">
			<div className="container d-flex align-items-center container-content">
				<div className="container container-text">
					<div className="col-md-8">
						<h3 id="intro-name">Hola, Soy Manu Maldonado</h3>
						<h1 id="intro-title" className="text-white">
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

/* Para asegurar que nunca haya 
errores en el componente, le decimos a Javascript ñ
el tipo que le pasamos
{props.tilte}, {props.description}, {props.buttonTitle}...
Card.propTypes = {
	title: PropTypes.string.isRequired;
	description: PropTypes.string;
	buttonTitle: PropTypes.string;
};
*/

export default Main;
