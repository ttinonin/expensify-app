import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../playground/Header';
import Contact from '../playground/Contact';
import Index from '../playground/Index';
import NotFound from '../components/NotFound';
import Help from '../playground/Help';
import Id from '../playground/Id';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={Index} exact={true}/>
                <Route path="/contact" component={Contact} />
                <Route path="/help" component={Help} />
                <Route path="/id:id" component={Id} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter;