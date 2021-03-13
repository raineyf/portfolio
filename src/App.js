import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Links from "./pages/Links";
import Error from "./pages/Error";

function App() {
    return (
        <Router>
            <Header />
            <main className="bg-gray text-white py-16 min-h-screen font-merriweather">
                <div className="max-w-5xl container py-12">
                    <Switch>
                        <Route path="/about" component={About} />
                        <Route path="/links" component={Links} />
                        <Route path="/" exact component={Home} />
                        <Route component={Error} />
                    </Switch>
                </div>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
