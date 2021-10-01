import styled from "styled-components";
import { Link } from "react-router-dom";
export const TopNav = styled.nav`
  background-color: #efefef;
  width: ${({ click }) => (click ? "100%" : "82%")};
  float: right;
  color: #000;
`;
export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding-right: 2rem;
  padding-left: 2rem;
  cursor: pointer;
`;
export const MenuIcon = styled.div``;

export const MenuItem = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  p {
    text-align: center;

    font-size: 0.99rem;
    font-weight:normal;
    color: #333a56;
    text-transform: uppercase;
  }
`;
export const ItemLinks = styled(Link)`
  margin-right: 1.5rem;
  text-decoration: none;
  color: ${(props) => props.color};
  font-size: 1.4rem;
`;
