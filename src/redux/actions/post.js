import {createAction, createStore} from '@reduxjs/toolkit'
import request from '../../tools/Request'


// export function posts(data){
//     return{
//         type:'POSTS',
//         payload:data
//     }
// }

// export function post(data){
//     return {
//         type:'POST',
//         payload:data
//     }
// }
export const items = createAction('POSTS')
export const item = createAction('POST')

export function getItems(){
    return dispatch => request('/posts').then(response => dispatch(items(response.data)))
}

export function getItem(id){
    return dispatch =>request(`/posts/${id}`).then(response=>dispatch(item(response.data)))
}
