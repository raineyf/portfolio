import React from "react";

function Links() {
    return (
        <section aria-labelledby="links-heading">
            <h1 className="font-montserrat text-5xl mb-8" id="links-heading">
                More Links
            </h1>
            <ul className="px-8 text-lg leading-8">
                <li>
                    <a
                        href="https://www.linuxmint.com/start/ulyssa/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.linuxmint.com/start/ulyssa/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        CodePen
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.linuxmint.com/start/ulyssa/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        LinkedIn
                    </a>
                </li>
            </ul>
        </section>
    );
}

export default Links;
