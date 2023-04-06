import React from "react";
import { Routes, Route } from "react-router-dom";

import Faqs from "./Faqs";
import Detail from "./Detail";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Faqs />} />
			<Route path="/detail" element={<Detail />} />
		</Routes>
	);
};

export default App;
