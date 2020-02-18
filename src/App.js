import React from "react";
import Routering from "./Routering";
import {Provider} from "react-redux";
import store from "./store/configureStore"




export default class App extends React.Component{



  render() {
    return (
        <Provider store={store}>
          <Routering/>
        </Provider>
    );
  }
}



