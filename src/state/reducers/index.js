import {combineReducers} from "redux";
import users from "./UserReducer"

export default combineReducers({
    user: users
})