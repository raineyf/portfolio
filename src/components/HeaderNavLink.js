import React from "react";
import { Link } from "react-router-dom";

function HeaderNavLink(props) {
    return (
        <li role="none">
            <Link
                to={props.to}
                ref={props.ref}
                onClick={props.onClick}
                onKeyDown={props.onKeyDown}
                className="block flex justify-center items-center h-16 border border-white bg-blue-light hover:bg-blue hover:text-4xl focus:bg-blue focus:text-4xl"
                tabIndex="-1"
                role="menuitem"
            >
                {props.name}
            </Link>
        </li>
    );
}

export default HeaderNavLink;
