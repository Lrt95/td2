const initialState = {
    user: "",
    score : []
};


function reducer(state = initialState, action) {

    switch (action.type) {
        case "SET_USER":
                return {...state, user:  action.user};

        case "ADD_SCORE":
            return {...state, score : [...state.score ,action.score]}
        default:
            return state;
    }
}

export default reducer