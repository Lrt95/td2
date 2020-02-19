import React from "react";
import {withRouter} from "react-router-dom";
import {addScore} from "../store/action";
import {connect} from "react-redux";

class FindNumber extends React.Component{
    numberInt = 0;
    nbFind = 0;
    counterTry = 0;
    constructor(props) {
        super(props);
        this.state = { information: "",
            name : this.props.user
        };
        this.nbFind = Math.floor(Math.random() * Math.floor(100));
    }
    handleSubmit(event) {
        event.preventDefault();
        this.numberInt = event.target[0].value;
        this.counterTry ++;
        this._game();
    }
    _game(){
        let number = this.numberInt;
        if( number < this.nbFind && number !== this.nbFind){
            this.setState({...this.state, information : "C'est plus grand"})
        }else if( number > this.nbFind && number !== this.nbFind){
            this.setState({...this.state, information : "C'est plus petit"})
        }else {
            this.setState({...this.state, information : "Bravo tu as trouvé"})
            this.props.addScore({
                name: this.state.name,
                score: parseInt(this.counterTry),
                mysteryNumber: parseInt(this.nbFind)
            });
            this.nbFind = Math.floor(Math.random() * Math.floor(100));
            this.counterTry = 0;
        }
    }
    _restart = () => {
        this.setState({...this.state, information : "Oops, tu as perdu, c'était " + this.nbFind});
        this.props.addScore({
            name: this.state.name,
            score: parseInt(-1),
            mysteryNumber: parseInt(this.nbFind)
        });
        this.nbFind = Math.floor(Math.random() * Math.floor(100));
    }
    render() {
        return (
            <div>
                <form onSubmit={ event => this.handleSubmit(event) }>
                    <label>
                        Nombre:
                        <input type="number"  name="number"/>
                    </label>
                    <input type="submit" value="Envoyer" />
                </form>
                <button onClick={this._restart}>Recommencer</button>
                <div id="restart">
                    <label> <span>{this.state.information}</span></label>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return {
        user : state.user
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addScore: score => {
            dispatch(addScore(score))
        }
    }
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FindNumber))
