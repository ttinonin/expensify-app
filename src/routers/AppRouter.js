import React from "react";
import { Link, BrowserRouter, Route, Switch } from 'react-router-dom';
import Index from "../components/Index";
import Header from "../components/Header";
import Add from "../components/Create";
import Edit from "../components/Edit";
import Help from "../components/Help";
import NotFound from "../components/NotFound";

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
            <Route path="/" component={Index} exact={true} />
            <Route path="/create" component={Add}/>
            <Route path="/edit:id" component={Edit}/>
            <Route path="/help" component={Help}/>
            <Route component={NotFound}/>
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter