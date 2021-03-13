import React from "react";

function About() {
    return (
        <section aria-labelledby="about-heading">
            <h1 className="font-montserrat text-5xl mb-8" id="about-heading">
                About Me
            </h1>
            <div className="max-w-3xl mx-auto">
                <p className="px-8 text-lg leading-8">
                    I began coding as a hobby in 2015. That hobby grew into a
                    passion that eventually led me to a career. I have a love
                    for all things computing, but I've focused on front-end
                    development for all of my professional life. I care about
                    writing inclusive code and enjoy learning new technologies.{" "}
                    <br />
                    <br />
                    Outside of coding, I enjoy spending time with my family,
                    watching Marvel movies and building PCs.
                </p>
                <h2 className="font-montserrat text-3xl mb-2 mt-8">
                    Front-End Languages:
                </h2>
                <ul className="list-disc flex flex-wrap  mx-4">
                    <li className="w-56">JavaScript</li>
                    <li className="w-56">HTML5</li>
                    <li className="w-56">CSS3</li>
                    <li className="w-56">Sass/SCSS</li>
                </ul>
                <h2 className="font-montserrat text-3xl mb-2 mt-8">
                    Frameworks/Libraries:
                </h2>
                <ul className="list-disc flex flex-wrap  mx-4">
                    <li className="w-56">React.js</li>
                    <li className="w-56">Tailwind</li>
                    <li className="w-56">Bootstrap</li>
                    <li className="w-56">Express.js</li>
                </ul>
                <h2 className="font-montserrat text-3xl mb-2 mt-8">
                    Workflow:
                </h2>
                <ul className="list-disc flex flex-wrap  mx-4">
                    <li className="w-56">Git/GitHub</li>
                    <li className="w-56">Node.js/npm</li>
                    <li className="w-56">Gulp.js</li>
                    <li className="w-56">Webpack</li>
                    <li className="w-56">VSCode</li>
                    <li className="w-56">Vim</li>
                    <li className="w-56">Atom</li>
                </ul>
                <h2 className="font-montserrat text-3xl mb-2 mt-8">
                    Subject Matter:
                </h2>
                <ul className="list-disc flex flex-wrap  mx-4">
                    <li className="w-56">Accessibility</li>
                    <li className="w-56">Responsive Development</li>
                    <li className="w-56">Performance</li>
                </ul>
                <h2 className="font-montserrat text-3xl mb-2 mt-8">
                    Accessibility Testing:
                </h2>
                <ul className="list-disc flex flex-wrap  mx-4">
                    <li className="w-56">VoiceOver</li>
                    <li className="w-56">axe</li>
                    <li className="w-56">WAVE</li>
                    <li className="w-56">Lighthouse</li>
                </ul>
            </div>
        </section>
    );
}

export default About;
