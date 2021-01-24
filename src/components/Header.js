import React from "react";
import logo from "../images/RF_Blue-BG.svg";

const Header = () => {
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
				<nav>
					<ul>
						<li>
							<a href="#">Home</a>
						</li>
						<li>
							<a href="#">About</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
