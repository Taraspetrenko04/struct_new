import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';


export const useRoutes = () =>{
    return(
        <Switch>
            <Route path='/' exact>
                <Home />
            </Route>
            <Route path='/about'>
                <About />
            </Route>
            <Route path='/services'>
                <About />
            </Route>
            <Route path='/references'>
                <About />
            </Route>
            <Route path='/contacts'>
                <About />
            </Route>

            <Redirect to='/' />
        </Switch>
    )
}
