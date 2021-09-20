import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./component/MainView/Dashboard/Dashboard";
import Category from "./component/MainView/Category/Category";
import Products from "./component/MainView/Products/Products";
import AboutUs from "./component/MainView/AboutUs/AboutUs";
import Contacts from "./component/MainView/Contacts/Contacts";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/category" component={Category} />
      <Route path="/products" component={Products} />
      <Route path="/aboutus" component={AboutUs} />
      <Route path="/contacts" component={Contacts} />
    </Switch>
  );
};
export default Routes;
