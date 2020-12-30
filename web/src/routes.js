import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import MyAccount from './pages/MyAccount';
import Register from './pages/Register';

const Routes = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/myaccount" exact component={MyAccount} />
        </Switch>
        </BrowserRouter>
    )
}

export default Routes;