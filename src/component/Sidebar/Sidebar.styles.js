import styled from "styled-components";

export const SidebarContainer = styled.div`
  width: 18%;
  left: ${({ click }) => (click ? "-18% " : "0%")};
  height: 100vh;
  position: absolute; // Toggler
  transition: 0.2s ease-in all;
  background: #506795;
  color: #ffffff;
`;
export const SidebarTitle = styled.div`
  // background-color: #fff;
  color: #d6d6c2;
  border-radius: 3px;
  font-size: 0.9rem;
  margin: 1rem 1rem 0rem 1rem;
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // width: 100%;
`;

export const SidebarHeader = styled.h3`
  // background: red;
  padding: 0.6rem 1rem 0.6rem 1rem;
  border-bottom: 1px solid #d6d6c2;
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
  background: ${(props) => (props.isItemSelected ? "#3e5074" : "#506795")};
  border-left: ${(props) => (props.isItemSelected ? "4px solid red" : "")};

  &:hover {
    color: gray;
    background: #3e5074;
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
