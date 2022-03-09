import React, { useState } from "react";
import * as s from "./Sidebar.styles";
import { menuItems } from "./SidebarMenuData";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import { ImPencil } from "react-icons/im";

const Sidebar = ({ isItemSelected, click }) => {
  const [selected, setSelected] = useState(menuItems[0].name);
  const handleMenuItemClick = (name) => {
    setSelected(name);
  };
  const menuItemsJSX = menuItems.map((item, index) => {
    const isItemSelected = selected === item.name;
    return (
      <Link
        key={index}
        to={item.to}
        style={{ textDecoration: "none", color: "#fff" }}
      >
        <s.MenuItem
          isItemSelected={isItemSelected}
          onClick={() => handleMenuItemClick(item.name)}
        >
          <s.Icon>{item.icon}</s.Icon>
          {item.name}
        </s.MenuItem>
      </Link>
    );
  });
  return (
    <div>
      <s.SidebarContainer click={click}>
        <s.SidebarHeader>
          {" "}
          <Avatar className="avater">
            <ImPencil className="pencil-log" />
          </Avatar>
          Integra
        </s.SidebarHeader>
        <s.SidebarTitle className="menuTitle">Menu</s.SidebarTitle>
        <s.MenuItemContainer>{menuItemsJSX}</s.MenuItemContainer>
      </s.SidebarContainer>
    </div>
  );
};

export default Sidebar;
