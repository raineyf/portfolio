import React from "react";
import { Link } from "react-router-dom";

function Error() {
    return (
        <section aria-labelledby="error-heading">
            <h1 className="font-montserrat text-5xl mb-8" id="error-heading">
                404 - this page doesn't exist
            </h1>
            <div className="max-w-3xl mx-auto">
                <p className="px-8 text-lg leading-8">
                    I'm not sure how you got here, but this page doesn't exist.
                    Want to go to the{" "}
                    <Link to="/" className="underline text-blue">
                        Home page
                    </Link>
                    ?
                </p>
            </div>
        </section>
    );
}

export default Error;
