import {createStore,applyMiddleware} from 'redux';
import reducers from '../reducers';

const myMiddleWare = store => next =>action=>{
    if(typeof action === 'function'){
        return action(store.dispatch)
    }
    next(action)
}


const store  = createStore(reducers,applyMiddleware(myMiddleWare))
export default store;