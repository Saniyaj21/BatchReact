import React from "react";
import Card from "../components/Card";
import CardImage from "../media/image.png";

import "../style/Home.css";

const Home = () => {
	const titleT = "iPhone";

	return (
		<div className='home'>
			{/* props */}
			<Card
				title={titleT}
				desc='Lorem ipsum'
				img={CardImage}
			/>
			<Card title='HP Victus' />
			<Card title='Readme' desc='desc' />
		</div>
	);
};

export default Home;
