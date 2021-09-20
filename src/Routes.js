import React from 'react'
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Dashboard from './component/MainView/Dashboard/Dashboard';
import Category from './component/MainView/Category/Category';
import Products from './component/MainView/Products/Products';
import AboutUs from './component/MainView/AboutUs/AboutUs';
import Contacts from './component/MainView/Contacts/Contacts';






export const Routes = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route path='/category'><Category/></Route>
            <Route path='/products'><Products/></Route>
            <Route path='/aboutus'><AboutUs/></Route>
            <Route path='/contacts'><Contacts/></Route>
            <Route exact path='/'><Dashboard/></Route>

        </Switch>
        </BrowserRouter>    
    )
}
export default Routes