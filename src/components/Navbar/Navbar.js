import React from "react";
import TopNavbar from "./TopNavbar";
import { FaBars } from "react-icons/fa";
import { Paper } from "@material-ui/core";
import { TopNavBar, TopContainer, MenuIcon } from "./Navbar.elements";
const Navbar = () => {
  return (
    <>
      <Paper>
        <TopNavBar>
          <TopContainer>
            <MenuIcon>
              <FaBars />
            </MenuIcon>
            <TopNavbar />
          </TopContainer>
        </TopNavBar>
      </Paper>
    </>
  );
};

export default Navbar;
