import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Wellcome from './pages/Wellcome';
import Initial from './pages/Initial';

const Routes = () => {
  return (
    <BrowserRouter>      
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/wellcome" exact component={Wellcome} />
        <Route path="/home" exact component={Initial} />
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;