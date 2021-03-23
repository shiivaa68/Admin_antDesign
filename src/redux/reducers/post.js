import {createReducer} from '@reduxjs/toolkit'
import {items,item} from '../actions/post'


// export function posts(state=[],action){
//     switch(action.type){
//         case 'POSTS':
//             return action.payload
//             default :
//             return state
//     }
// }

// export function post (state={},action){
//     switch(action.type){
//         case 'POST':
//             return action.payload
//             default :
//             return state
//     }
// }

export const posts = createReducer([],{
    [items]:(state,action) =>action.payload
})

export const post = createReducer([],{
    [item]:(state,action) => action.payload
})