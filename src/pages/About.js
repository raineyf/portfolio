import React from "react";

function About() {
    return (
        <section aria-labelledby="about-heading">
            <h1 className="font-montserrat text-5xl mb-8" id="about-heading">
                About Me
            </h1>
            <p className="px-8 text-lg leading-8">
                This is some about me copy.
            </p>
        </section>
    );
}

export default About;
