import {
    FETCH_USER,
    CREATE_USER
} from "./../action_types/UserType"

var intialState = [];

const UserReducer = (users = intialState, action) => {
    const { type, payload}  = action;
    switch(type){
        case FETCH_USER:
            return payload;
        case CREATE_USER:
            return [...users, payload];    
        default: return users;
    }
}

export default UserReducer;