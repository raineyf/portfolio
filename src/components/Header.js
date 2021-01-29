import React from "react";
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
			this.setState({ ariaExpanded: "true" });
		} else {
			this.setState({ ariaExpanded: "false" });
		}
	}
	render() {
		return (
			<header>
				<div className="page-container">
					<div className="logo-container">
						<img
							src={logo}
							alt="RF Logo"
							className="logo"
						/>
					</div>
					<button
						onClick={this.handleClick}
						aria-expanded={
							this.state.ariaExpanded
						}
					>
						Menu
					</button>
					<nav
						className={
							this.state
								.ariaExpanded ==
							"false"
								? "hidden"
								: ""
						}
					>
						<ul>
							<li>
								<a href="#">
									Home
								</a>
							</li>
							<li>
								<a href="#">
									About
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</header>
		);
	}
}

export default Header;
