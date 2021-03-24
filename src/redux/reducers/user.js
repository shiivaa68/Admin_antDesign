import {createReducer} from '@reduxjs/toolkit';


export const user =createReducer({},{
    USER:(state,action)=>action.payload
})

export const isLoggedIn = createReducer(false,{
    IS_LOGGED_IN:(state,action) => action.payload
})

export const userIsLoading = createReducer(true,{
    USER_IS_LOADING:(state,action) => action.payload
})

export const loginSubmitLoading = createReducer(false,{
    LOGIN_SUBMIT_LOADING:(state,action ) => action.payload
})