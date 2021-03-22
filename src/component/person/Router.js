import React from 'react'
import {Route} from 'react-router-dom'
import List from './List';
import Full from './Full';


const RouterPerson = ()=>{
    return(
        <>
        <Route exact path="/person" component={List}/>
        <Route exact path="/person/:id/show" component={Full}/> 
        </>
    )
}

export default RouterPerson;