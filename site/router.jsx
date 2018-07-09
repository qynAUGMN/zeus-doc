import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import HomePage from './content/home'
import DocPage from './content/doc'

export default function MainRouter() {
    return (
        <React.Fragment>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/home" component={HomePage} />
                <Route path="/docs" component={DocPage} />
            </Switch>
        </React.Fragment>
    )
}
