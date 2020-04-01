import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Pages from './Pages';

export const Routes = () => {
    return(
    <Switch>
        <Route exact path="/" component={Pages.Home} />

   
        <Route path="/the-experience" component={Pages.TheExperience} />
       

        <Route path="/pricing" component={Pages.Pricing} />
        <Route path="/about-us" component={Pages.AboutUs} /> 
        <Route path="/login" component={Pages.Login} />
        <Route path="/constellation" component={Pages.Constellation} />

    </Switch>

    )
    
}