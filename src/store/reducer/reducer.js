const initialState = {
    user: ""
};


function reducer(state = initialState, action) {

    switch (action.type) {
        case "ADD_USER":
                return {...state, user:  action.user};


        default:
            return state;
    }
}

export default reducer