import React from 'react'
import Sidebar from "../component/Sidebar/Sidebar";
import MainView from "../component/MainView/MainView"
import styled from 'styled-components';
import Navbar from '../component/Navbar/Navbar'
const HomePageStyled = styled.div`
display: flex;
`;

const HomePage = () => {
    return (
        <>
       
       <HomePageStyled>
           <Sidebar/>
           <MainView/>
       </HomePageStyled>
       </>
    )
}

export default HomePage
