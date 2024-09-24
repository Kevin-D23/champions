import Callbtn from "./callbtn";
import { Link, useLocation } from "react-router-dom";
import hamburgerOpen from "../images/hamburger-open.jpg";
import hamburgerClose from "../images/hamburger-close.jpg";
import { useEffect } from "react";

export default function Navbar() {
  const location = useLocation();

  useEffect(() => {
    const navToggle = document.querySelector(".mobile-nav-toggle");
    const primaryNav = document.querySelector(".primary-nav");
    const navHamburger = document.querySelector(".nav-hamburger");
    const navClose = document.querySelector(".nav-close");

    if (navToggle && primaryNav) {
      navToggle.addEventListener("click", () => {
        primaryNav.toggleAttribute("data-visible");
        navHamburger.toggleAttribute("data-visible");
        navClose.toggleAttribute("data-visible");
      });
    }
    return () => {
      navToggle.removeEventListener("click", () => {});
    };
  }, []);

  function handleClick() {
    const primaryNav = document.querySelector(".primary-nav");
    const navHamburger = document.querySelector(".nav-hamburger");
    const navClose = document.querySelector(".nav-close");

    primaryNav.toggleAttribute("data-visible");
    navHamburger.toggleAttribute("data-visible");
    navClose.toggleAttribute("data-visible");
    primaryNav.setAttribute("style", "transition-delay:.5s")
    setInterval(() => {
    primaryNav.setAttribute("style", "transition-delay:0s")
      
    }, 500);
  }
  return (
    <header>
      <div className="nav-wrapper">
        <Link to="/" className="logo fw-regular fs-800 text-accent-400">
          CHAMPIONS
        </Link>
        <button className="mobile-nav-toggle">
          <img
            src={hamburgerOpen}
            alt=""
            className="nav-hamburger"
            data-visible
          />
          <img src={hamburgerClose} alt="" className="nav-close" />
        </button>
        <nav className="primary-nav fw-semi-bold fs-500" id="primary-nav">
          <ul>
            <li>
              <Link
                to={"/"}
                style={
                  location.pathname === "/"
                    ? { color: "var(--clr-accent-300)" }
                    : {}
                }
                onClick={handleClick}
              >
                Home
              </Link>
            </li>
              {/* <li>
                <Link
                  to={"/about"}
                  style={
                    location.pathname === "/about"
                      ? { color: "var(--clr-accent-300)" }
                      : {}
                  }
                  onClick={handleClick}

                >
                  About
                </Link>
              </li> */}
            <li>
              <Link
                to={"/services"}
                style={
                  location.pathname === "/services"
                    ? { color: "var(--clr-accent-300)" }
                    : {}
                }
                onClick={handleClick}

              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to={"/contact"}
                style={
                  location.pathname === "/contact"
                    ? { color: "var(--clr-accent-300)" }
                    : {}
                }
                onClick={handleClick}

              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to={"/gallery"}
                style={
                  location.pathname === "/gallery"
                    ? { color: "var(--clr-accent-300)" }
                    : {}
                }
                onClick={handleClick}

              >
                Gallery
              </Link>
            </li>
            <li>
              <Callbtn />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
