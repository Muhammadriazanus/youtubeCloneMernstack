import React from 'react'
import styled from 'styled-components'
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom"
import { FaVideo } from "react-icons/fa";

import { IoIosHelpCircleOutline } from "react-icons/io";
import { useSelector } from 'react-redux';
const Container = styled.div`
    position : sticky;
    top : 0;
    height : 56px;
    background-color : ${({ theme }) => theme.bgLighter};


`
const Wrapper = styled.div`
     display : flex;
     align-items : center;
     justify-content : flex-end;
     height : 100%;
     padding : 0px 20px;
     position : relative;
`
const Search = styled.div`
    position : absolute;
    left : 0px;
    right : 0px;
    margin : auto;
    width : 40%;
    display : flex;
    justify-content : space-between;
    align-items : center;
    border : 1px solid #ccc;
    border-radius : 3px;
    padding : 10px 20px;

`
const Input = styled.input`
   border : none;
   background-color : transparent;
`
const Button = styled.button`
          padding : 5px 15px ;
          background-color : transparent;
          border : 1px solid #3ea6ff;
          color : #3ea6ff;
          border-radius : 3px ;
          font-weight : 500;
          cursor : pointer;
          display : flex;
          align-items : center;
          gap : 5px
`
const UserIcon = styled.div`
      display : flex;
      align-items : center;
      gap : 10px;
      font-weight : 500;
      color : ${({theme})=> theme.text}
`
const Avatar = styled.img`
    width : 32px;
    height : 32px;
    border-radius : 50%;
    color : ${({theme})=> theme.text}
`
const Navbar = () => {
  const User  = useSelector(state => state.user.user)
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder='Search' />
          <CiSearch />
        </Search>
        {User ? (
          <UserIcon>
            <FaVideo />
            <Avatar src={User.img}/>
            {User.name}
          </UserIcon>
        ) : 
          (<Link to="signin" style={{ textDecoration: 'none' }}>
            <Button>
              <IoIosHelpCircleOutline /> SIGN IN
            </Button>
          </Link>
        )}
      </Wrapper>
    </Container>
  )
}

export default Navbar
