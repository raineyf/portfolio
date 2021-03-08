import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <section aria-labelledby="home-heading">
            <h1 className="font-montserrat text-5xl mb-8" id="home-heading">
                Welcome
            </h1>
            <div className="max-w-3xl mx-auto">
                <p className="px-8 text-lg leading-8">
                    Thank you for stopping by. My name is Rainey and I am a
                    front-end developer. To learn more about me, check out the{" "}
                    <Link to="/about" className="underline text-blue-lighter">
                        About page
                    </Link>{" "}
                    or{" "}
                    <Link to="/links" className="underline text-blue-lighter">
                        Links page
                    </Link>
                    .
                </p>
            </div>
        </section>
    );
}

export default Home;
