import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Wellcome from './pages/Wellcome';
import Initial from './pages/Initial';
import NewTicket from './pages/NewTicket';
import MyTickets from './pages/MyTickets';
import AllTickets from './pages/AllTickets';

const Routes = () => {
  return (
    <BrowserRouter>      
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/wellcome" exact component={Wellcome} />
        <Route path="/home" exact component={Initial} />
        <Route path="/newticket" exact component={NewTicket} />
        <Route path="/mytickets" exact component={MyTickets} />
        <Route path="/alltickets" exact component={AllTickets} />
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;