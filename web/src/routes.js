import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Register from './pages/Register';
import Myaccount from './pages/Myaccount';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/register" exact component={Register} />
        <Route path="/myaccount" exact component={Myaccount} />
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;