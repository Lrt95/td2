import React from "react";
class FindNumber extends React.Component{
    numberInt = 0;
    nbFind = 0;
    constructor(props) {
        super(props);
        this.state = { information: ""}
        this.nbFind = Math.floor(Math.random() * Math.floor(100));
    }
    handleSubmit(event) {
        event.preventDefault();
        this.numberInt = event.target[0].value;
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
            this.nbFind = Math.floor(Math.random() * Math.floor(100));
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
export default FindNumber