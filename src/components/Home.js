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
				<li style={{ marginTop: "20px" }}>
					<strong>Faqs:</strong>
					<ul>
						<li>
							<Link to="/faqs">Collection</Link>
						</li>

						<li>
							<Link to="/faqs/pdp">PDP</Link>
						</li>
					</ul>
				</li>
				<li style={{ marginTop: "20px" }}>
					<strong>
						<Link to="/contact-us-form" className="underline">
							Contact Us Form
						</Link>
					</strong>
				</li>
			</ul>
		</div>
	);
};

export default Home;
