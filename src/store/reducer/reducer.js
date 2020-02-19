import * as firebase from "firebase";
import {DB_CONFIG} from "../../firebaseConfig";

const initialState = {
    user: "",
    score : []
};

firebase.initializeApp(DB_CONFIG);

const database = firebase.database();

function reducer(state = initialState, action) {


    switch (action.type) {
        case "SET_USER":
            return {...state, user:  action.user};

        case "ADD_SCORE":
            let nextState = {...state, score : [...state.score ,action.score]};
            nextState.score.sort((a, b) => {
                if(a.score === b.score) return 0;
                if (a.score === -1) return 1;
                if (b.score === -1) return -1;
                if(a.score > b.score) {
                    return 1;
                }
                if(a.score < b.score) {
                    return -1;
                }
                return 0;
            });
            if (nextState.score.length > 5){
                nextState.score.pop();
            }
           // database.ref('/score').set(nextState)
                //.then(response => console.log(response))
              //  .catch(error => console.log(error));
            return nextState;

        case "GET_SCORE":
            let newState;
            console.log('yolo')
        async function readFirebase () {
            database.ref('/score').on('value', (snapshot) =>{
                return  {...state, score : [snapshot.val()]};
            });
        }
            console.log(newState);



        default:
            return state;
    }
}


export default reducer
