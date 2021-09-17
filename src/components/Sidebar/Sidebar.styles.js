import styled from "styled-components";

export const SidebarContainer = styled.div`
  width: 18%;
  height: 100vh;
  max-width: 280px;
  min-width: 80px;
  position: relative; // Toggler
  transition: .2s ease-in all;
  background: #333a56;
  color: #ffffff;
  `;

  export const SidebarHeader = styled.h3`
  padding: 20px 0;
  text-align: center;
  margin-bottom: 10px;
  letter-spacing: 3px;
  text-transform: uppercase;
  `;

  export const MenuItemContainer = styled.div``;
  export const MenuItem = styled.div`
  padding:10px 20px;
  font-weight: 500;
  font-size: .85rem;
  font-family: Dosis,sans-serif;
  background: ${props => props.isItemSelected ? '#262b40' : '#333a56'};
  border-left: ${props => props.isItemSelected ? '4px solid red': ''};

&:hover{
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