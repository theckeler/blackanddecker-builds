import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "../scss/main.scss";

import Home from "./Home";
import CustomerService from "./CustomerService";
import GiftGuide from "./GiftGuide";

const Index = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/customer-service" element={<CustomerService />} />
      <Route path="/gift-guide" element={<GiftGuide />} />
    </Routes>
  );
};

export default Index;
