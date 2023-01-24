import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "./images/logo.svg";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="inner-wrapper">
          <div className="logo">
            <Logo />
            <Link to="/" className="active">
              <a>Rate My Film</a>
            </Link>
          </div>
          <div>
            <p>
              Rate My Film is a demonstration tool only and is not affiliated
              with, endorsed by, or intended as a replacement for any official
              regulatory services or film certification organisations.
            </p>
            <p>
              A project by{" "}
              <a href="" target="_blank" rel="noreferrer" className="left">
                Daniel Cranney
              </a>{" "}
              |{" "}
              <a
                href="http://www.github.com/pranjalshikhar"
                target="_blank"
                rel="noreferrer"
                className="left"
              >
                Source Code
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
