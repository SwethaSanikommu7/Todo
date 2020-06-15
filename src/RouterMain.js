import React from 'react'
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import DashBoard from './views/dashBoard'
import SignIn from './signIn'

export default function RouterMain() {
    return(
        <div>
            <Router>
            <Switch>
                <Route exact path="/" component={SignIn}></Route>
                <Route exact path="/DashBoard" component={DashBoard}></Route>
            </Switch>
            </Router>
        </div>
    )
}