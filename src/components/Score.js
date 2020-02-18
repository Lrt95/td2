import React from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

class Score extends React.Component{

    constructor(props) {
        super(props);


    }

    render() {
        console.log(this.props.score)
        return (
            <table>
                <thead><tr><th>Nom</th><th>Score</th></tr></thead><tbody>

                        {
                            this.props.score.map((user, index) => <tr key={index}><td>{user.name}</td><td>{user.score}</td></tr>)
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