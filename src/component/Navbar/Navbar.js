import React from "react";
import styled from "styled-components";
import TopNavbar from "./TopNavbar";
import { FaBars } from "react-icons/fa";
import { Paper } from "@material-ui/core";
const TopNavBar = styled.nav`
  background-color: #EFEFEF;
  font-size: 1.2rem;
  color:#000;
  
`;
const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding-right: 2rem;
  padding-left: 2rem;
  cursor: pointer;
  
`;
const Navbar = () => {
  return (
    <>
      <Paper>
        <TopNavBar>
          <TopContainer>
            <FaBars />

            <TopNavbar />
          </TopContainer>
        </TopNavBar>
      </Paper>
    </>
  );
};

export default Navbar;
