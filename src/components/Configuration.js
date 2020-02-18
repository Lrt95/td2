import React from "react";
import {addUser} from "../store/action";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

class Configuration extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            user : ""
        }
    }
    addUser(event) {
        event.preventDefault();
        this.props.addUser( event.target[0].value);
    }
    render() {
        return (
            <form onSubmit={ event => this.addUser(event) }>
                <label>
                    Prénom:
                    <input type="text"  name="Prénom"/>
                </label>
                <input type="submit" value="Envoyer" />
            </form>
        )
    }
}
const mapSateToProps = state => {
    return {
        user : state.user
    };
};
const mapDispatchToProps = dispatch => {
    return {
        addUser: user => {
            dispatch(addUser(user))
        }
    }
};
export default withRouter(connect(
    mapSateToProps,
    mapDispatchToProps
)(Configuration))