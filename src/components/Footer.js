import React from "react";

function Footer() {
    return (
        <footer className="bg-blue border-t border-white fixed bottom-0 w-full p-2 font-merriweather">
            <p className="text-white text-sm text-center">
                This site was built with{" "}
                <a
                    href="https://reactjs.org/"
                    target="_blank"
                    rel="noreferrer"
                    className="underline"
                >
                    React
                </a>{" "}
                and{" "}
                <a
                    href="https://tailwindcss.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="underline"
                >
                    Tailwind
                </a>{" "}
                so that employers would know that I can use React and Tailwind
            </p>
        </footer>
    );
}

export default Footer;
