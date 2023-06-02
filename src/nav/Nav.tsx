import Logo from "./logo.svg";
import "./navigation.css";
import "../App.css";
import menu from "./menu.png";
import close from "./close.png";
import { useState } from "react";

function Nav() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleMenuToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  const handleCloseClick = () => {
    setToggleMenu(false);
  };

  return (
    <div className="nav-container">
      <div>
        <img className="logo-image" src={Logo} alt="Logo" />
      </div>
      <nav>
        <ul className={`nav-list ${toggleMenu ? "show" : ""}`}>
          <img
            className="close-icon"
            src={close}
            alt="close"
            onClick={handleCloseClick}
          />
          <li className="nav-item"><a href="#home">Home</a></li>
          <li className="nav-item"><a href="#wgpt3">What is GPT3?</a></li>
          <li className="nav-item"><a href="#possibility">Open AI</a></li>
          <li className="nav-item"><a href="#features">Case Studies</a></li>
          <li className="nav-item"><a href="#blog">Library</a></li>
          <li>
            <button className="signin">Sign in</button>
          </li>
          <li>
            <button className="signup">Sign up</button>
          </li>
        </ul>
        <img
          className={`menu-icon ${toggleMenu ? "hide" : ""}`}
          src={menu}
          alt="menu"
          onClick={handleMenuToggle}
        />
      </nav>
      <div className="button-container">
        <button className="signin-button">Sign in</button>
        <button className="signup-button">Sign up</button>
      </div>
    </div>
  );
}

export default Nav;
