import styled from "styled-components";

export const SidebarContainer = styled.div`
  width: 18%;
  left: ${({ click }) => (click ? "-18% " : "0%")};
  height: 100vh;
  position: absolute; // Toggler
  transition: 0.2s ease-in all;
  background: #333a56;
  color: #ffffff;
`;

export const SidebarHeader = styled.h3`
  // background: red;
  padding: 0.6rem 1rem 0.6rem 1rem;
  text-align: center;
  margin-bottom: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.2rem;

  .avater {
    background: linear-gradient(105.6deg, #7db6e7 37.65%, #1ad697 83.5%);
    padding: 0rem;
    margin-right: 0.5rem;
  }
  .pencil-log {
    font-size: 1rem;
  }
`;

export const MenuItemContainer = styled.div``;
export const MenuItem = styled.div`
  padding: 10px 20px;
  font-weight: 500;
  font-size: 0.85rem;
  font-family: Dosis, sans-serif;
  background: ${(props) => (props.isItemSelected ? "#262b40" : "#333a56")};
  border-left: ${(props) => (props.isItemSelected ? "4px solid red" : "")};

  &:hover {
    color: gray;
    background: #262b40;
    cursor: pointer;
    transition: 0.1s ease-in all;
    border-left: 4px solid red;
  }
`;

export const Icon = styled.span`
  width: 18px;
  height: 18px;
  color: white;
  padding-right: 15px;
`;
