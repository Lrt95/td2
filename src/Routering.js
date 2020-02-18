import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import Configuration from "./components/Configuration";
import FindNumber from "./components/FindNumber";
import About from "./components/About";
import React from "react";


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
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/Configuration">Configuration</Link>
                            </li>
                            <li>
                                <Link to="/FindNumber">Find number</Link>
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
                        <Route path="/Configuration">
                            <Configuration/>
                        </Route>
                        <Route path="/FindNumber">
                            <FindNumber></FindNumber>
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
