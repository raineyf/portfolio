import React from "react";

function Links() {
    return (
        <section aria-labelledby="links-heading">
            <h1 className="font-montserrat text-5xl mb-8" id="links-heading">
                More Links
            </h1>
            <div className="max-w-3xl mx-auto">
                <ul className="px-8 text-lg leading-8 list-disc">
                    <li className="my-4">
                        <p>
                            {" "}
                            <a
                                href="https://github.com/raineyf"
                                target="_blank"
                                rel="noreferrer"
                                className="text-blue-lighter underline"
                            >
                                GitHub
                            </a>
                        </p>
                    </li>
                    <li className="my-4">
                        <p>
                            {" "}
                            <a
                                href="https://www.linkedin.com/in/rainey-fleming/"
                                target="_blank"
                                rel="noreferrer"
                                className="text-blue-lighter underline"
                            >
                                LinkedIn
                            </a>
                        </p>
                    </li>
                    <li className="my-4">
                        <p>
                            {" "}
                            <a
                                href="https://codepen.io/raineyf"
                                target="_blank"
                                rel="noreferrer"
                                className="text-blue-lighter underline"
                            >
                                CodePen
                            </a>{" "}
                            - I mostly use this for proof of concept, but you'll
                            find some small code snippets
                        </p>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Links;
