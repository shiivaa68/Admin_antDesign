import {combineReducers} from 'redux'
import {person,persons} from './person'
import {post,posts} from './post'

export default combineReducers({
    person,
    persons,
    posts,
    post
})