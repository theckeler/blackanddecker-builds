import React from "react";
import { Link } from "react-router-dom";
import "../scss/home.scss";

const Home = () => {
	return (
		<div
			className="wrapper home"
			style={{
				minHeight: "50vh",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
			}}>
			<h1 style={{ textTransform: "uppercase" }}>TB Page Builds:</h1>
			<ul className="home-list">
				<li>
					<Link to="/customer-service">Customer Service</Link>
				</li>
				<li className="mt-2">
					<Link to="/gift-guide">Gift Guide</Link>
				</li>
			</ul>
		</div>
	);
};

export default Home;
