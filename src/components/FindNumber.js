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
        }
        this.nbFind = Math.floor(Math.random() * Math.floor(3));
    }
    handleSubmit(event) {
        event.preventDefault();
        this.numberInt = event.target[0].value;
        this.counterTry ++;
        this._game();
        console.log(this.counterTry)
        console.log(this.state.name)
    }
    _game(){
        let number = this.numberInt;
        if( number < this.nbFind && number !== this.nbFind){
            this.setState({...this.state, information : "C'est plus grand"})
        }else if( number > this.nbFind && number !== this.nbFind){
            this.setState({...this.state, information : "C'est plus petit"})
        }else {
            this.setState({...this.state, information : "Bravo tu as trouvé"})
            this.nbFind = Math.floor(Math.random() * Math.floor(100));
            this.props.addScore({
             name: this.state.name,
             score: parseInt(this.counterTry)
             })
        }
    }
    _restart = () => {
        this.setState({...this.state, information : "Oops, tu as perdu, c'était " + this.nbFind});
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
                    <label > {this.state.information}</label>
                </form>
                <button onClick={this._restart}>Recommencer</button>
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