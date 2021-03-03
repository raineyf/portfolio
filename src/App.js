import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Links from "./pages/Links";
import Error from "./pages/Error";

function App() {
    return (
        <Router>
            <Header />
            <main className="bg-gray text-white pt-16 min-h-screen">
                <div className="max-w-5xl container py-12">
                    <Switch>
                        <Route path="/about" component={About} />
                        <Route path="/links" component={Links} />
                        <Route path="/" exact component={Home} />
                        <Route component={Error} />
                    </Switch>
                </div>
            </main>
        </Router>
    );
}

export default App;
