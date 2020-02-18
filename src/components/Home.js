import React from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {name : this.props.name}
    }
    render() {
        return (
            <p>Hello {this.props.user} !</p>
        );
    }
}
const mapStateToProps = (state) =>{
    return {
        user : state.user
    }
};
export default withRouter(connect(mapStateToProps)(Home))