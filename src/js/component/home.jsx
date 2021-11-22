import React from "react";

//Components
import Navbar from "../component/Navbar.jsx";
import Main from "../component/main.jsx";
import MainBody from "../component/MainBody.jsx";

//Resources
//import rigoImage from "../../img/rigo-baby.jpg";

//Styles

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<Main />
			<MainBody />
		</div>
	);
};

export default Home;
