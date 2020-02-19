import React from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {default as firebase} from "firebase";



class Score extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            score: []
        };
        firebase.database().ref("/score").on('value', (snap) => {
            this.setState({...this.state, score: (snap.val())});
        })

    }

    render() {
        return (
            <table>
                <thead><tr><th>Nom</th><th>Score</th><th>Nombre Mystere</th></tr></thead><tbody>
                        {
                            this.state.score.map((user, index) => <tr key={index}><td>{user.name}</td><td>{user.score}</td><td>{user.mysteryNumber}</td></tr>)
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