const initialState = {
    user: "",
    score : []
};


function reducer(state = initialState, action) {

    switch (action.type) {
        case "SET_USER":
                return {...state, user:  action.user};

        case "ADD_SCORE":
            let nextState = {...state, score : [...state.score ,action.score]};
            nextState.score.sort((a, b) => {
                if(a.score > b.score) {
                    return 1;
                }
                if(a.score < b.score) {
                    return -1;
                }
                return 0;
            })
            if(nextState.score.length < 5) {
                return nextState;
            }
            return state;
        default:
            return state;
    }
}

export default reducer