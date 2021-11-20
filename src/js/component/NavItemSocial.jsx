import React from "react";

const NavItemSocial = prop => {
	return (
		<li className="nav-item active">
			<a className="nav-link" href="#">
				<i className={prop.network}></i>
			</a>
		</li>
	);
};

export default NavItemSocial;
