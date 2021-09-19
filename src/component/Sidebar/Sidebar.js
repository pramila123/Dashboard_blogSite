import React, { useState } from "react";
import * as s from "./Sidebar.styles";
import { menuItems } from "./SidebarMenuData";
import { BrowserRouter, Link } from "react-router-dom";

const Sidebar = ({isItemSelected}) => {
  const [selected, setSelected] = useState(menuItems[0].name);
  const handleMenuItemClick = name => {
    setSelected(name);
  }
  const menuItemsJSX = menuItems.map((item, index) => {
    const isItemSelected = selected === item.name;
    return (
      <BrowserRouter>
      <Link to={item.to} style={{ textDecoration:"none", color:"#fff"}}>
      <s.MenuItem key={index}
       isItemSelected={isItemSelected}
       onClick={() => handleMenuItemClick(item.name)}>
        <s.Icon>{item.icon}</s.Icon>
        {item.name}
      </s.MenuItem>
      </Link>
      </BrowserRouter>
    );
  });
  return (
    <div>
      <s.SidebarContainer>
        <s.SidebarHeader>E-commerce</s.SidebarHeader>
        <s.MenuItemContainer>{menuItemsJSX}</s.MenuItemContainer>
      </s.SidebarContainer>
    </div>
  );
};

export default Sidebar;
