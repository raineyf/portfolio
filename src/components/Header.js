import React, { useState, useEffect, useRef } from "react";
import logo from "../images/RF_Blue-BG.svg";
import HeaderNavLink from "./HeaderNavLink";

function Header() {
    const menuButton = useRef(null);
    const headerNav = useRef(null);
    const [navState, setNavState] = useState({
        ariaExpanded: "false",
        focusIndex: undefined,
    });
    useEffect(() => {
        const navLinks = [];
        headerNav.current.childNodes.forEach((node) => {
            navLinks.push(node.childNodes[0]);
        });
        if (navState.ariaExpanded === "true") {
            if (navState.focusIndex !== undefined) {
                navLinks[navState.focusIndex].focus();
            }
        }
    });

    // object for header nav links
    const headerNavLinks = [
        {
            name: "Home",
            to: "/",
        },
        {
            name: "About",
            to: "/about",
        },
        {
            name: "Links",
            to: "/links",
        },
    ];
    // ^^ object for header nav links

    // functions to control menu
    const displayMenu = (index) => {
        setNavState({
            ariaExpanded: "true",
            focusIndex: index,
        });
    };
    const hideMenu = () => {
        setNavState({
            ariaExpanded: "false",
            focusIndex: undefined,
        });
        menuButton.current.focus();
    };
    const toggleMenu = (index) => {
        if (navState.ariaExpanded === "false") {
            displayMenu(index);
        } else {
            hideMenu();
        }
    };
    // ^^ functions to control menu

    // functions to handle interactions
    const handleHover = () => {
        displayMenu();
    };
    const handleClick = () => {
        toggleMenu();
    };
    const handleButtonKeyDown = (e) => {
        const navLinks = [];
        headerNav.current.childNodes.forEach((node) => {
            navLinks.push(node.childNodes[0]);
        });
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
        const navLinks = [];
        headerNav.current.childNodes.forEach((node) => {
            navLinks.push(node.childNodes[0]);
        });
        const navLength = navLinks.length;
        const lastNavIndex = navLength - 1;
        const target = e.target;
        const targetIndex = navLinks.indexOf(target);
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
    // ^^ functions to handle interactions
    return (
        <header className="bg-blue border-b border-white fixed w-full font-montserrat">
            <div className="max-w-5xl container flex items-center justify-between h-16 relative">
                <div className="w-16">
                    <img src={logo} alt="RF Logo" />
                </div>
                <button
                    ref={menuButton}
                    onMouseEnter={handleHover}
                    onClick={handleClick}
                    onKeyDown={handleButtonKeyDown}
                    aria-expanded={navState.ariaExpanded}
                    aria-haspopup="true"
                    tabIndex={navState.ariaExpanded === "true" ? "-1" : "0"}
                    aria-controls="header-navigation"
                    id="menu-button"
                    className="bg-blue-light text-white h-12 w-32 rounded text-3xl border-2 border-blue-light uppercase hover:border-white hover:text-4xl focus:border-white focus:text-4xl"
                >
                    Menu
                </button>
                <nav
                    className={
                        navState.ariaExpanded === "false"
                            ? "hidden"
                            : "text-white text-3xl absolute right-0 top-16 w-72 max-w-full"
                    }
                >
                    <ul
                        ref={headerNav}
                        id="header-navigation"
                        role="menu"
                        aria-labelledby="menu-button"
                    >
                        {headerNavLinks.map((headerNavLink, index) => (
                            <HeaderNavLink
                                key={index}
                                name={headerNavLink.name}
                                to={headerNavLink.to}
                                onClick={handleClick}
                                onKeyDown={handleLinkKeyDown}
                            />
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
