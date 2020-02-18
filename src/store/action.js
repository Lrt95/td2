

export const SET_USER = "SET_USER"
export const ADD_SCORE = "ADD_SCORE"


export function setUser(user) {
    return  {type: SET_USER, user};
}

export function addScore(score){
    return {type : ADD_SCORE, score}
}

