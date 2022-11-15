import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "../scss/main.scss";
import "../scss/home.scss";

import CustomerService from "./CustomerService";

const Index = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/customerservice" element={<CustomerService />} />
    </Routes>
  );
};

function Home() {
  return (
    <div
      className="wrapper home"
      style={{
        minHeight: "50vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ textTransform: "uppercase" }}>TB Page Builds:</h1>
      <ul className="home-list">
        <li style={{ marginTop: "20px" }}>
          <Link to="/customerservice">Customer Service</Link>
        </li>
      </ul>
    </div>
  );
}

export default Index;
