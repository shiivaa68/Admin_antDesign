import React from 'react'
import { Route,Switch } from 'react-router'
import New from './New';
import List from './List';
import Full from './Full';

const  PostRouter= ()=>{
    return(
        <>
        <Switch>
        <Route exact path="/post" component={List}/>
        <Route exact path="/post/:id/show" component={Full}/>
        <Route exact path="/post/new" component={New}/>
        </Switch>
        </>
    )
}
export default PostRouter;