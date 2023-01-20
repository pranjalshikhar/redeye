import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div>
        <a href="index.html">
          <img src="/images/logo.svg" width="200px" height="71px" />
        </a>
      </div>
      <nav>
        <a href="">About</a>
        <a href="">Donate</a>
        <a href="">Visit</a>
        <a href="">Contact</a>
      </nav>
    </div>
  );
};

export default Header;
