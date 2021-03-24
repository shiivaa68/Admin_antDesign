import {combineReducers} from 'redux'
import {person,persons} from './person'
import {post,posts} from './post'
import {isLoggedIn,user,userIsLoading,loginSubmitLoading} from  './user'

export default combineReducers({
    person,
    persons,
    posts,
    post,
    user,
    isLoggedIn,
    userIsLoading,
    loginSubmitLoading
})