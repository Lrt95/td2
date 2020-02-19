import React from "react";
import Routering from "./Routering";
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducer from "./store/reducer/reducer";
import {getScore} from "./store/action";


const store = createStore(reducer)

export default class App extends React.Component{

    constructor(props) {
        super(props);
        store.dispatch(getScore());
    }

  render() {
    return (
        <Provider store={store}>
          <Routering/>
        </Provider>
    );
  }
}



