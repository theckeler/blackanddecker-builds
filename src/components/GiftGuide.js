import React from "react";
import jsonData from "../data/gift-guide.json";
import ProductBlock from "./elements/ProductBlock";
import Button from "./elements/Button";
import "../scss/gift-guide.scss";

const App = () => {
  return (
    <div className="customer-service">
      <section className="section-1 bg-red mt-6">
        <div className="wrapper px-3 py-4">
          <h1
            className="text-center mb-0 text-white"
            dangerouslySetInnerHTML={{ __html: jsonData.hero.h1 }}
          ></h1>
          <p
            className="mt-2 mb-0 text-center text-white"
            dangerouslySetInnerHTML={{ __html: jsonData.hero.copy }}
          ></p>
        </div>
      </section>

      <section className="section-2">
        <div className="wrapper px-3 py-6">
          <ul className="row list-unstyled">
            {jsonData.products.blocks.map((block, i) => {
              return (
                <li
                  className="flex flex-column col-12 col-sm-12 col-md-6 col-lg-4 p-1"
                  key={i}
                >
                  <ProductBlock block={block} i={i} addClass="bg-grey" />
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default App;
