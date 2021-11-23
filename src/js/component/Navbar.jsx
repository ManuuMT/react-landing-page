import React from "react";
import NavItem from "../component/NavItem.jsx";
import NavItemSocial from "../component/NavItemSocial.jsx";
import ButtonCollapse from "../component/ButtonCollapse.jsx";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-black py-3 sticky-top">
			<div className="container-fluid">
				<a className="navbar-brand" href="#"></a>

				<ButtonCollapse />

				<div className="collapse navbar-collapse " id="navbarNav">
					<ul className="navbar-nav m-auto ">
						<NavItem title="INICIO" />
						<NavItem title="SOBRE MI" />
						<NavItem title="SERVICIOS" />
						<NavItem title="TRABAJOS" />
						<NavItem title="¿HOLA?" />
					</ul>

					<div className="nav-right">
						<ul className="navbar-nav">
							<NavItemSocial network="fab fa-facebook" />
							<NavItemSocial network="fab fa-linkedin" />
							<NavItemSocial network="fab fa-github" />
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
