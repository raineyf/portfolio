import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Links from "./pages/Links";

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/links">
                    <Links />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
