import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import MyAccount from './pages/MyAccount';
import NewTicket from './pages/NewTicket';
import MyTickets from './pages/MyTickets';
import AllTickets from './pages/AllTickets';
import ClosedTickets from './pages/ClosedTickets';
import TicketInfo from './pages/TicketInfo';
import Admin from './pages/Admin';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/register" exact component={Register} />
                <Route path="/myaccount" exact component={MyAccount} />

                <Route path="/newticket" exact component={NewTicket} />
                <Route path="/mytickets" exact component={MyTickets} />
                <Route path="/alltickets" exact component={AllTickets} />
                <Route path="/closedtickets" exact component={ClosedTickets} />
                <Route path="/ticket/:id" exact component={TicketInfo} />

                <Route path="/admin" exact component={Admin} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;