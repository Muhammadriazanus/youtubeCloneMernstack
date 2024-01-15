import React from 'react'
import styled from "styled-components"
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { MdOutlineSubscriptions } from "react-icons/md";

import { MdVideoLibrary } from "react-icons/md";
import { MdOutlineHistory } from "react-icons/md";
import { MdOutlineLibraryMusic } from "react-icons/md";
import { FaPassport } from "react-icons/fa6";
import { IoGameController } from "react-icons/io5";
import { MdMovieEdit } from "react-icons/md";
import { FaRegNewspaper } from "react-icons/fa";
import { MdLiveTv } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { BiRepost } from "react-icons/bi";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { MdOutlineLightMode } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Title = styled.h2`
   font-size : 14px;
   font-weight : 500;
   color : #aaaaaa;
   margin-bottom : 20px
`
const Container = styled.div`
      flex : 1;
      height : 190vh;
      color :  ${({ theme }) => theme.text};
      background-color : ${({ theme }) => theme.bg};
      font-size : 14px;
      position : sticky;
      top : 0;
`
const Login = styled.div`
  
`
const Button = styled.button`
      padding : 5px 15px ;
      background-color : transparent;
      border : 1px solid #3ea6ff;
      color : #3ea6ff;
      border-radius : 3px ;
      font-weight : 500;
      margin-bottom :  10px;
      cursor : pointer;
      display : flex;
      align-items : center;
      gap : 5px
  
`
const Wrapper = styled.div`
   padding : 18px 26px;
`
const Logo = styled.div`
     display : flex;
     align-items : center;
     gap : 5px;
     font-weight : 500;
     margin-bottom :  25px
`
const Img = styled.img`
   height: 25px
`
const Item = styled.div`
    display : flex;
    align-items : center;
    gap: 30px;
    cursor : pointer;
    padding : 7.5px 0;
    &:hover {
        background-color :${({ theme }) => theme.soft}
    }
`
const Hr = styled.hr`
    margin : 15px 0px;
    border : 0.5px solid  ${({ theme }) => theme.soft}
`

const Menu = ({ darkMode, setDarkMode }) => {
    const User  = useSelector(state => state.user.user)
    return (
        <Container>
            <Wrapper>
                <Link to="Home"  style={{ color: "inherit", textDecoration: "none" }}>
                    <Logo>
                        <Img src='https://github.com/safak/youtube2022/blob/react-video-ui/src/img/logo.png?raw=true' />
                        YouTube
                    </Logo>
                </Link>
                <Item>
                    <IoHomeOutline />
                    Home
                </Item>
                <Link to="trend" style={{ textDecoration: "none" ,  color:"inherit"}}>
                    <Item>
                        <MdOutlineExplore />
                        Explore
                    </Item>
                </Link>
                <Link to="subscribe" style={{ textDecoration: "none" ,  color:"inherit" }}>
                <Item>
                    <MdOutlineSubscriptions />
                    Subscriptions
                </Item>
                </Link>
                <Hr />
                <Item>
                    <MdVideoLibrary />
                    Library
                </Item>
                <Item>
                    <MdOutlineHistory />
                    Histroy
                </Item>
                <Hr />
                {!User &&
                    <>
                <Login>
                    Sign in to like videos, comment, and subscribe
                    <Link to="Signin" style={{ textDecoration: "none" }}>
                        <Button>
                            <IoIosHelpCircleOutline /> SIGN IN
                        </Button>
                    </Link>
                </Login>
                <Hr />
                </>}
                <Title>Best of YouTube</Title>
                <Item>
                    <MdOutlineLibraryMusic />
                    Music
                </Item>
                <Item>
                    <FaPassport />
                    Sports
                </Item>
                <Item>
                    <IoGameController />
                    Gaming
                </Item>
                <Item>
                    <MdMovieEdit />
                    Movies
                </Item>
                <Item>
                    <FaRegNewspaper />
                    News
                </Item>
                <Item>
                    <MdLiveTv />
                    Live
                </Item>
                <Hr />

                <Item>
                    <IoSettingsOutline />
                    Setting
                </Item>
                <Item>
                    <BiRepost />
                    Report
                </Item>
                <Item>
                    <IoIosHelpCircleOutline />
                    Help
                </Item>
                <Item onClick={() => setDarkMode(!darkMode)}>
                    <MdOutlineLightMode />
                    {/* LightMode
                     */}
                    {darkMode ? "Dark" : "light"}
                </Item>

            </Wrapper>
        </Container>
    )
}

export default Menu
