import React from "react";
import Footer from "../Footer/Footer";
import Services from "../Services/Services";

import Review from "./../Review/Review";
import HeaderSlider from "./HeaderMain/HeaderSlider/HeaderSlider";

const Home = () => {
	return (
		<div>
			<HeaderSlider></HeaderSlider>
			<Services></Services>
			<Review></Review>
			<Footer></Footer>
		</div>
	);
};

export default Home;
