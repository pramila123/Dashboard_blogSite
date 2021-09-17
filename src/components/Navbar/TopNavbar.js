import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IoLogOutOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
const data = [
  {
    id: "1",
    link: "/logout",
    icon: <IoLogOutOutline />,
    color: "#57606B",
  },
  {
    id: "2",
    link: "/user",
    icon: <FaUser />,
    color: "#D2D4D7",
  },
];
const MenuItem = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  p {
    text-align: center;

    font-size: 1.1rem;
    color: #333a56;
    text-transform: uppercase;
  }
`;
const ItemLinks = styled(Link)`
  margin-right: 1.5rem;
  text-decoration: none;
  color: ${(props) => props.color};
  font-size: 1.4rem;
`;
const TopNavbar = () => {
  return (
    <>
      <MenuItem>
        {data.map((post) => {
          return (
            <ItemLinks color={post.color} to={post.link} key={post.id}>
              {post.icon}
            </ItemLinks>
          );
        })}

        <p>Pramila khadka</p>
      </MenuItem>
    </>
  );
};

export default TopNavbar;
