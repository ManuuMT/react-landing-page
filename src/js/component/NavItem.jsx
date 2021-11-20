import React from "react";

const NavItem = prop => {
	return (
		<li className="nav-item">
			<a className="nav-link px-3" href="#">
				{prop.title}
			</a>
		</li>
	);
};

export default NavItem;
