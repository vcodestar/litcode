import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "./ThemeContext";


function NavigationBar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${
        theme === "light" ? "dark bg-dark" : "light bg-light"
      } fixed-top`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          LitCode
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/categories">
                Categories
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About 
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <button
            className="btn btn-outline-secondary ms-auto"
            onClick={toggleTheme}
          >
            Switch to {theme === "light" ? "Dark" : "Light"} Theme
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
