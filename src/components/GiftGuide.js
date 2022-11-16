import React from "react";
import jsonData from "../data/gift-guide.json";
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
                  className="flex flex-column col-12 col-sm-12 col-md-4 p-1"
                  key={i}
                >
                  <a
                    href={block.url}
                    className="flex flex-column h-100 text-decoration-none bg-grey justify-content-center"
                  >
                    <p
                      className="text-center p-2 mb-0 bg-black for"
                      dangerouslySetInnerHTML={{
                        __html: block.for,
                      }}
                    />
                    <div className="p-3">
                      <img src={block.img} alt="" className="w-100" />
                      <p
                        className="h3 mt-2 font-weight-normal"
                        dangerouslySetInnerHTML={{
                          __html: block.title,
                        }}
                      />
                      <p
                        className="mt-2 mb-0"
                        dangerouslySetInnerHTML={{
                          __html: block.copy,
                        }}
                      />
                      <Button
                        copy={block.button.copy}
                        addClass="bg-red mt-3 w-100 text-uppercase"
                      />
                    </div>
                  </a>
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
