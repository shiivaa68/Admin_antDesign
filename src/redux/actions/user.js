import {message} from 'antd';
import {createAction} from '@reduxjs/toolkit'


export const user = createAction('USER')
export const isLoggedIn = createAction('IS_LOGGED_IN')
export const userIsLoading = createAction('USER_IS_LOADING')
export const loginSubmitLoading = createAction('LOGIN_SUBMIT_LOADING')



export function logon(data) {
    return dispatch => {
      dispatch(isLoggedIn(!!data.id))
      dispatch(user(data))
      dispatch(userIsLoading(false))
    }
  }
  
  export function login(data) {
    return dispatch => {
      dispatch(loginSubmitLoading(true))
      setTimeout(() => {
        dispatch(loginSubmitLoading(false))
        if (data.username === 'admin' && data.password === '123') {
          dispatch(logon({
            id: 1,
            name: 'salim',
          }))
        }
        else {
          message.error('Username or password not correct')
        }
      }, 1000)
    }
  }
