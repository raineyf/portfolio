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
        <header>
            <div className="page-container">
                <div className="logo-container">
                    <img src={logo} alt="RF Logo" className="logo" />
                </div>
                <button onClick={handleClick} aria-expanded={ariaExpanded}>
                    Menu
                </button>
                <nav className={ariaExpanded == "false" ? "hidden" : ""}>
                    <ul>
                        <li>
                            <Link to="/" onClick={handleClick}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" onClick={handleClick}>
                                About
                            </Link>
                        </li>

                        <li>
                            <Link to="/links" onClick={handleClick}>
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
