import React from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

class Score extends React.Component{

    constructor(props) {
        super(props);
        console.log("component user");
        console.log(this.props.score);
    }

    render() {
        return (
            <table>
                <thead><tr><th>Nom</th><th>Score</th><th>Nombre Mystere</th></tr></thead><tbody>
                        {
                            this.props.score.map((user, index) => <tr key={index}><td>{user.name}</td><td>{user.score}</td><td>{user.mysteryNumber}</td></tr>)
                        }
            </tbody>
            </table>

        )
    }

}
const mapStateToProps = (state) =>{
    return {
        score : state.score
    }
};
export default withRouter(connect(mapStateToProps)(Score))