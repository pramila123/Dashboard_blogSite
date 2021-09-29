import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./component/MainView/Dashboard/Dashboard";
import Category from "./component/MainView/Category/Category";
import Products from "./component/MainView/Products/Products";
import AboutUs from "./component/MainView/AboutUs/AboutUs";
import Contacts from "./component/MainView/Contacts/Contacts";
import SubCategory from "./component/MainView/SubCategory/SubCategory";
import Order from "./component/MainView/Order/Order";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/category" component={Category} />
      <Route path="/products" component={Products} />
      <Route path="/aboutus" component={AboutUs} />
      <Route path="/contacts" component={Contacts} />
      <Route path="/subcategory" component={SubCategory} />
      <Route path="/order" component={Order} />
    </Switch>
  );
};
export default Routes;
