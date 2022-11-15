import React from "react";
function Header() {
  return (
    <nav>
      <div
        className="wrapper ml-auto mr-auto"
        style={{ padding: "20px", maxWidth: "1400px" }}
      >
        <a href="/" title="Cub Cadet Home">
          <img
            className="icon logo"
            src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dw7d1eb42a/images/svg-icons/logo.svg"
            alt=""
          />
        </a>
      </div>
    </nav>
  );
}

export default Header;
