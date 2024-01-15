import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"
import {format} from "timeago.js"
import axios from 'axios'
const Container = styled.div`
    // width : ${(props)=> props.type !== "sm" && "280px"};
    margin-bottom : ${(props)=>props.type === "sm" ? "10px" :"45px"};
    gap : 10px;
    cursor : pointer;
    display : ${(props)=>props.type === "sm" && "flex"};

`
const Image = styled.img`
  width : 200px;
  height : 130px;
  object-fit : cover;
  background-color : #999;
  flex : 1;

`
const Details = styled.div`
    display : flex;
    margin-top : ${(props)=>props.type !== "sm" && "-10px"};
    gap : 12px;
`
const ChannelsImage = styled.img`
    width : 34px;
    height : 34px;
    border-radius : 50%;
    background-color :#999;
    display : ${(props)=> props.type === "sm" && "none"};
    margin-top : 17px;

`
const Texts = styled.div`
color: inherit;
font-size : 9px;
margin-top : 10px

`
const Title = styled.h1`
    font-size : 9px;
    font-weight : 500;
    color : ${({ theme }) => theme.text};
`
const ChannelsName = styled.h2`
    font-size : 9px;
    color : ${({ theme }) => theme.textSoft};
    margin : 9px 0;
`

const Info = styled.div`
      color : black;
      font-size : 9px;

`
const Card = ({type , videos}) => { 

  return (
    <Link to={`/video/${videos?._id}`} style={{ textDecoration: "none" }}>
      <Container >
        <Image type={type} src="https://tse4.mm.bing.net/th?id=OIP.OTZX4HGHxH7kxsVUMUCKzwHaE8&pid=Api&P=0&h=220" />
        <Details>
          <ChannelsImage type={type} src="https://tse4.mm.bing.net/th?id=OIP.lDlBgsYlyb8-9yp5S9SE7gHaE9&pid=Api&P=0&h=220" />
          <Texts>
            <Title>
             {videos?.title}

            </Title>
            <ChannelsName >
              {/* {channels.decs} */}
              muhammad anas
            </ChannelsName>
            <Info>
             {videos?.views} views * {format(videos?.createdAt)}
            </Info >
          </Texts>
        </Details>
      </Container>
    </Link>
  )
}

export default Card
