import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./component/MainView/Dashboard/Dashboard";
import Category from "./component/MainView/Category/Category";
import Products from "./component/MainView/Products/Products";
import AboutUs from "./component/MainView/AboutUs/AboutUs";
import Contacts from "./component/MainView/Contacts/Contacts";
import SubCategory from "./component/MainView/SubCategory/SubCategory";
import Navbar from "./component/Navbar/Navbar";
import Employee from "./component/MainView/Employee/Employee";
import LoginPage from "./component/MainView/LoginPage/LoginPage";
export const Routes = () => {
  return (
    <Switch>
      {/* <Route path="/login" component={LoginPage} /> */}
      {/* <Navbar /> */}
      <Route exact path="/" component={Dashboard} />
      {/* <Route path="/Navbar" component={Navbar} /> */}
      <Route path="/admin/category" component={Category} />
      <Route path="/admin/products" component={Products} />
      <Route path="/admin/aboutus" component={AboutUs} />
      <Route path="/admin/contacts" component={Contacts} />
      <Route path="/admin/subcategory" component={SubCategory} />
      <Route path="/admin/employee" component={Employee} />
    </Switch>
  );
};
export default Routes;
