import {
    FETCH_USER,
    CREATE_USER,
    // DELETE_USER,
    // UPDATE_USER
}from "./../action_types/UserType"

export const actionFetchUser = (data) => {
    return{
        type: FETCH_USER,
        payload: data
    }
} 

export const actionCreateUser = (data) => {
    return{
        type: CREATE_USER,
        payload: data
    }
}