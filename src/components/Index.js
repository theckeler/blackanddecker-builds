import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "../scss/main.scss";

import Home from "./Home";
import Faqs from "./faqs/Faqs";

const Index = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/faqs" element={<Faqs />} />
		</Routes>
	);
};

export default Index;
