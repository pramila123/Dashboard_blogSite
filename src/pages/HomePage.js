import React from 'react'
import Sidebar from "../components/Sidebar/Sidebar";
import MainView from "../components/MainView/MainView"
import styled from 'styled-components';

const HomePageStyled = styled.div`
display: flex;
`;

const HomePage = () => {
    return (
       <HomePageStyled>
           <Sidebar/>
           <MainView/>
       </HomePageStyled>
    )
}

export default HomePage
