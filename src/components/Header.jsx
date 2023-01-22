import React from "react";

const Header = () => {
  return (
    <header>
      <div>
        <a href="index.html">
          <img src="/images/logo.svg" width="200px" height="71px" />
        </a>
      </div>
      <nav>
        <a href="">About</a>
        <a href="">Donate</a>
        <a href="https://www.bbfc.co.uk/" target="_blank">
          Visit BBFC
        </a>
        <a href="">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
