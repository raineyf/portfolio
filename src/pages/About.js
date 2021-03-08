import React from "react";

function About() {
    return (
        <section aria-labelledby="about-heading">
            <h1 className="font-montserrat text-5xl mb-8" id="about-heading">
                About Me
            </h1>
            <div className="max-w-3xl mx-auto">
                <p className="px-8 text-lg leading-8">
                    This is some about me copy.
                </p>
            </div>
        </section>
    );
}

export default About;
