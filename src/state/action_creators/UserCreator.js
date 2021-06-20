import {
    actionFetchUser,
    actionCreateUser
} from "./../actions/UserAction"
import UserService from "./../../services/UserService"

export const fetchUser = () => async (dispatch) => {

    // try {
    //     const res = await UserService.getAll();
    //     // console.log("Data: ", res.data);
    //     dispatch(actionFetchUser(res.data));
    // } catch(error) {
    //     console.log(error);
    // }

    await UserService.getAll()
    .then(res => dispatch(actionFetchUser(res.data)))
    .catch(err => console.log(err));
}

export const createUser = (file) => async (dispatch) => {
    try{
        // console.log("resdata: ", res.data);

        await UserService.add(file)
        .then(res => dispatch(actionCreateUser(res.data)))
        .catch(err => console.log(err))
        // dispatch(actionCreateUser(res.data))
        // return Promise.resolve(res.data);
    }catch(err){
        return Promise.reject(err);
    }
}
