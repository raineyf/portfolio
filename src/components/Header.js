import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "../images/RF_Blue-BG.svg";

class Header extends React.Component {
    constructor() {
        super();
        this.state = { ariaExpanded: "false" };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        const ariaExpanded = this.state.ariaExpanded;
        if (ariaExpanded == "false") {
            this.setState((prevState) => ({ ariaExpanded: "true" }));
        } else {
            this.setState((prevState) => ({ ariaExpanded: "false" }));
        }
    }
    render() {
        return (
            <header>
                <div className="page-container">
                    <div className="logo-container">
                        <img src={logo} alt="RF Logo" className="logo" />
                    </div>
                    <button
                        onClick={this.handleClick}
                        aria-expanded={this.state.ariaExpanded}
                    >
                        Menu
                    </button>
                    <nav
                        className={
                            this.state.ariaExpanded == "false" ? "hidden" : ""
                        }
                    >
                        <ul>
                            <li>
                                <Link to="/" onClick={this.handleClick}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" onClick={this.handleClick}>
                                    About
                                </Link>
                            </li>

                            <li>
                                <Link to="/links" onClick={this.handleClick}>
                                    Links
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Header;
