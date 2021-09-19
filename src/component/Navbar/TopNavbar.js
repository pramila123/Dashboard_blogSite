import React from "react";
import { IoLogOutOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import styled from "styled-components";
const UserIcons = styled.div`
  display: flex;
  justify-content: flex-end;
align-items:center;
  .logout {
    margin-right: 2rem;
    color:#111210;
  }
`;
const TopNavbar = () => {
  return (
    <>
      <UserIcons>
        <IoLogOutOutline className="logout" />
        <FaUserCircle className="logout" />
        <div>
          <span>Pramila Khadka</span>
          <p><center>Admin</center></p>
        </div>
      </UserIcons>
    </>
  );
};

export default TopNavbar;
