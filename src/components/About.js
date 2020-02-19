import React from "react";
export default class About extends React.Component{

    constructor(props) {
        super(props);
        this.state = {nameTab: ["Sarah Hayat", "Antony Correia", "Lucas Provost", "Eddy Marquand", "Houssam Laghzil"]}
    }
    render() {
        return (
            <div>
                <div>
                    <h2>Membres du groupe :</h2>
                </div>
                <ul>
                    {
                    this.state.nameTab.map(i => <li value={i} key={i} > {i} </li>)
                    }
                </ul>
            </div>

        )
    }
}

