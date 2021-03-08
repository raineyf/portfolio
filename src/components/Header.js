import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../images/RF_Blue-BG.svg";

function Header() {
    const [navState, setNavState] = useState({
        ariaExpanded: "false",
        focusIndex: null,
    });
    useEffect(() => {
        const headerNav = document.querySelector("#header-navigation");
        const navLinks = headerNav.querySelectorAll("a");
        if (navState.ariaExpanded === "true") {
            if (navState.focusIndex != null) {
                navLinks[navState.focusIndex].focus();
            }
        }
    });
    const displayMenu = (index) => {
        setNavState({
            ariaExpanded: "true",
            focusIndex: index,
        });
    };
    const hideMenu = () => {
        setNavState({
            ariaExpanded: "false",
            focusIndex: null,
        });
        document.querySelector("#menu-button").focus();
    };
    const toggleMenu = (index) => {
        if (navState.ariaExpanded === "false") {
            displayMenu(index);
        } else {
            hideMenu();
        }
    };
    const handleHover = () => {
        displayMenu(null);
    };
    const handleClick = () => {
        toggleMenu();
    };
    const handleButtonKeyDown = (e) => {
        const headerNav = document.querySelector("#header-navigation");
        const navLinks = headerNav.querySelectorAll("a");
        const navLength = navLinks.length;
        const lastNavIndex = navLength - 1;
        if (
            e.code === "ArrowDown" ||
            e.code === "Enter" ||
            e.code === "Space"
        ) {
            e.preventDefault();
            toggleMenu(0);
        } else if (e.code === "ArrowUp") {
            toggleMenu(lastNavIndex);
        }
    };
    const handleLinkKeyDown = (e) => {
        const headerNav = document.querySelector("#header-navigation");
        const navLinks = headerNav.querySelectorAll("a");
        const navLinksArr = () => {
            let array = [];
            navLinks.forEach((l) => {
                array.push(l);
            });
            return array;
        };
        const navLength = navLinks.length;
        const lastNavIndex = navLength - 1;
        const target = e.target;
        const targetIndex = navLinksArr().indexOf(target);
        if (e.code === "ArrowDown") {
            e.preventDefault();
            if (targetIndex === lastNavIndex) {
                navLinks[0].focus();
            } else {
                const nextIndex = targetIndex + 1;
                navLinks[nextIndex].focus();
            }
        } else if (e.code === "ArrowUp") {
            e.preventDefault();
            if (targetIndex === 0) {
                navLinks[lastNavIndex].focus();
            } else {
                const prevIndex = targetIndex - 1;
                navLinks[prevIndex].focus();
            }
        } else if (e.code === "Tab") {
            hideMenu();
        } else if (e.code === "Escape") {
            e.preventDefault();
            hideMenu();
        }
    };
    return (
        <header className="bg-blue border-b border-white fixed w-full font-montserrat">
            <div className="max-w-5xl container flex items-center justify-between h-16 relative">
                <div className="w-16">
                    <img src={logo} alt="RF Logo" />
                </div>
                <button
                    onMouseEnter={handleHover}
                    onClick={handleClick}
                    onKeyDown={handleButtonKeyDown}
                    aria-expanded={navState.ariaExpanded}
                    aria-haspopup="true"
                    tabIndex={navState.ariaExpanded === "true" ? "-1" : "0"}
                    aria-controls="header-navigation"
                    id="menu-button"
                    className="bg-blue-light text-white h-12 w-24 rounded text-lg border-2 border-blue-light uppercase hover:border-white hover:text-xl focus:border-white focus:text-xl"
                >
                    Menu
                </button>
                <nav
                    className={
                        navState.ariaExpanded === "false"
                            ? "hidden"
                            : "text-white absolute right-0 top-16 w-60 max-w-full"
                    }
                >
                    <ul
                        id="header-navigation"
                        role="menu"
                        aria-labelledby="menu-button"
                    >
                        <li role="none">
                            <Link
                                to="/"
                                onClick={handleClick}
                                onKeyDown={handleLinkKeyDown}
                                className="block flex justify-center items-center h-12 border border-white bg-blue-light hover:bg-blue hover:text-xl focus:bg-blue focus:text-xl"
                                tabIndex="-1"
                                role="menuitem"
                            >
                                Home
                            </Link>
                        </li>
                        <li role="none">
                            <Link
                                to="/about"
                                onClick={handleClick}
                                onKeyDown={handleLinkKeyDown}
                                className="block flex justify-center items-center h-12 border border-white bg-blue-light hover:bg-blue hover:text-xl focus:bg-blue focus:text-xl"
                                tabIndex="-1"
                                role="menuitem"
                            >
                                About
                            </Link>
                        </li>

                        <li role="none">
                            <Link
                                to="/links"
                                onClick={handleClick}
                                onKeyDown={handleLinkKeyDown}
                                className="block flex justify-center items-center h-12 border border-white bg-blue-light hover:bg-blue hover:text-xl focus:bg-blue focus:text-xl"
                                tabIndex="-1"
                                role="menuitem"
                            >
                                Links
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
