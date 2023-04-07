import React from "react";
import { Routes, Route } from "react-router-dom";

import Faqs from "./Faqs";
import PDP from "./PDP";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Faqs />} />
			<Route path="/pdp" element={<PDP />} />
		</Routes>
	);
};

export default App;
