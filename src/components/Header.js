import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "../images/RF_Blue-BG.svg";

function Header() {
    const [ariaExpanded, setAriaExpanded] = useState("false");
    const handleClick = () => {
        if (ariaExpanded == "false") {
            setAriaExpanded("true");
        } else {
            setAriaExpanded("false");
        }
    };
    return (
        <header className="bg-blue border-b border-white fixed w-full font-montserrat">
            <div className="max-w-5xl container flex items-center justify-between h-16 relative">
                <div className="w-16">
                    <img src={logo} alt="RF Logo" />
                </div>
                <button
                    onClick={handleClick}
                    aria-expanded={ariaExpanded}
                    className="bg-blue-light text-white h-12 w-24 rounded text-lg border-2 border-blue-light uppercase hover:border-white hover:text-xl"
                >
                    Menu
                </button>
                <nav
                    className={
                        ariaExpanded == "false"
                            ? "hidden"
                            : "text-white absolute right-0 top-16 w-60 max-w-full"
                    }
                >
                    <ul>
                        <li>
                            <Link
                                to="/"
                                onClick={handleClick}
                                className="block flex justify-center items-center h-12 border border-white bg-blue-light hover:bg-blue hover:text-xl"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                onClick={handleClick}
                                className="block flex justify-center items-center h-12 border border-white bg-blue-light hover:bg-blue hover:text-xl"
                            >
                                About
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/links"
                                onClick={handleClick}
                                className="block flex justify-center items-center h-12 border border-white bg-blue-light hover:bg-blue hover:text-xl"
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
