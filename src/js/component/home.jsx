import React from "react";

//Components
import Navbar from "../component/Navbar.jsx";
import Intro from "../component/Intro.jsx";
import MainBody from "../component/MainBody.jsx";
import Footer from "../component/Footer.jsx";

const Home = () => {
	return (
		<div>
			<Navbar />
			<Intro />
			<MainBody />
			<Footer />
		</div>
	);
};

export default Home;
