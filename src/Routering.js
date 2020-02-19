import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import Config from "./components/Config";
import FindNumber from "./components/FindNumber";
import About from "./components/About";
import Score from "./components/Score";
import React from "react";
import "./App.css"


class Routering extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
        }
    }

    render() {
        return (
            <Router>
                <div>
                    <nav>
                        <ul >
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/Config">Configuration</Link>
                            </li>
                            <li>
                                <Link to="/FindNumber">FindNumber</Link>
                            </li>
                            <li>
                                <Link to="/Score">Score</Link>
                            </li>
                            <li>
                                <Link to="/About">About</Link>
                            </li>
                        </ul>
                    </nav>
                    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                    <Switch>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route path="/Config">
                            <Config/>
                        </Route>
                        <Route path="/FindNumber">
                            <FindNumber></FindNumber>
                        </Route>
                        <Route path="/Score">
                            <Score/>
                        </Route>
                        <Route path="/About">
                            <About/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}
export default Routering
