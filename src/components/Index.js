import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "../scss/main.scss";

import Home from "./Home";
import FaqsIndex from "./faqs/Index";
import ContactUsForm from "./contact-us-form/Index";

const Index = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/faqs/*" element={<FaqsIndex />} />
			<Route path="/contact-us-form/*" element={<ContactUsForm />} />
		</Routes>
	);
};

export default Index;
