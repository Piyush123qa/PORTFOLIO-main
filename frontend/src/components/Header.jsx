import React from "react";
import "../styles.css";

function Header() {
  return (
    <>
      <header>
        <div className="logo">
          <img src={require("./logo.png")} alt="" />
        </div>
        <div className="headerElements">
          <li>
            <a href="#home">HOME</a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#skills">SKILLS</a>
          </li>
          <li>
            <a href="#projects">PROJECTS</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
        </div>
      </header>

      <div className="resp">
        <nav className="navbar bg-body-tertiary fixed-top">
          <div className="container-fluid">
            <a className="navbar-brand" href="JavaScript">
              <img className="image" src={require("./logo.png")} alt="" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="offcanvas offcanvas-end"
              tabindex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="#home"
                    >
                      HOME
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#about">
                      ABOUT
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#experience">
                      EXPERIENCE
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#skills">
                      SKILLS
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#projects">
                      PROJECTS
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#contact">
                      CONTACT
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
