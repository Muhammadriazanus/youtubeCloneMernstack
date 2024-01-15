import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { FaShare } from "react-icons/fa";
import { AiFillCheckCircle } from "react-icons/ai";
import Comments from '../Component/comments';
import Card from "../Component/Card"
import {useDispatch, useSelector} from "react-redux"
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { fetchSuccess } from '../redux/videoSlice';
import { format } from 'timeago.js';
import { current } from '@reduxjs/toolkit';
const Container = styled.div`

     display : flex;
      gap : 24px
`
const Content = styled.div`
     flex :4;
`
const Recommdation = styled.div`
    flex : 2;
`
const VideoWrapper = styled.div`

`
const Title = styled.h1`
   font-size : 18px;
   font-weight : 400;
   margin-top : 20px;
   margin-bottom : 10px;
   color : ${({theme})=> theme.text};


`
const Details = styled.div`
   display : flex;
   justify-content : space-between;
   align-items : center;
   color : ${({theme})=> theme.text}
`
const Info = styled.span`
      color : ${({theme})=> theme.textSoft};
`
const Buttons = styled.div`
display : flex;

gap : 20px;
color : ${({theme})=> theme.text};

`

const Button = styled.div`
display : flex;
align-items : center;
color : ${({theme})=> theme.text};
cursor : pointer
`
const Hr = styled.hr`
    margin : 15px 0px;
    border : 0.5px solid ${({theme})=> theme.soft};
`
const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Image = styled.img`
width : 50px;
height : 40px;
border-radius : 50%;
`
const ChannelDetails = styled.div`
    display : flex;
    flex-direction : column;
    color : ${({theme})=> theme.text}
`
const ChannelName  = styled.div`
    font-size : 13px;
    font-weight : 400
`

const ChannelCounter = styled.span`
  font-size : 12px;
  margin-top :5px;
  margin-bottom : 20px;
  color : ${({theme})=> theme.textSoft}

`
const Description = styled.p`
font-size : 14px;
margin-top : -16px

     
`
const ChannelInfo = styled.div`
   display : flex;
   gap :20px;
`
const Subscribe = styled.button`
    padding : 10px 30px;
    width : 137px;
    height :34px;
    background-color : #cc1a00;
    font-weight : 500;
    color : white;
    border-radius: 3px;
    height : max-content;
    cursor : pointer;

`

const Video = () => {
  const User  = useSelector(state => state.user.user)
  const videos = useSelector(state => state.video.video)
  const dispatch = useDispatch()

  // const path = useLocation().pathname.split("/")[2]
  
  // const [videochannel,setvideo]  = useState({})
  // const [Channel,setChannel]  = useState({})
  // useEffect(()=>{
  //   const fetchData = async()=>{
  //     try {
  //       const videoRes = await axios.get(`/videos/find/${path}`)
  //       const channelsRes = await axios.get(`/users/find/${videoRes.data.userId}`)
        // setvideo(videoRes.data)
        // console.log(videoRes);




  //       setChannel(channelsRes.data)
  //       dispatch(fetchSuccess(videoRes.data))
        

  //     } catch (error) {
        
  //     }
  //     fetchData()
  //   }
  // },[path,dispatch])

  return (
    <Container>
      <Content>
        <VideoWrapper>
          {/* <iFrame 
           width="100%"
           height="400px"
           src="https://www.youtube.com/embed/k3Vfj-e1Ma4"
           title="YouTube video player"
           frameborder="0"
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
           allowfullscreen></iFrame> */}
           <iframe 
            width="100%"
            height="400px"
            src="https://www.youtube.com/embed/k3Vfj-e1Ma4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
          </iframe>
        </VideoWrapper>
        <Title>
          {videos?.title}
        </Title>
        <Details>
          <Info>{videos?.views} views * {format(videos?.createdAt)}</Info>
          <Buttons>
            <Button><BiSolidLike />{videos?.like?.length}</Button>
            <Button><BiSolidDislike />Dislike</Button>
            <Button><FaShare />Share</Button>
            <Button><AiFillCheckCircle />Save</Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image src='https://media.gettyimages.com/photos/happy-lama-picture-id155159495'/>
            <ChannelDetails>
              <ChannelName>{Channel?.name}</ChannelName>
              <ChannelCounter>{Channel?.subsciber}</ChannelCounter>
              <Description>{videos?.desc}</Description>
            </ChannelDetails>
          </ChannelInfo>
          <Subscribe>
            SUBSCRIBE
          </Subscribe>
        </Channel>
        <Hr />
        <Comments />
      </Content>
      {/* <Recommdation>
        <Card type ="sm"/>
        <Card type ="sm"/>
        <Card type ="sm"/>
        <Card type ="sm"/>
        <Card type ="sm"/>
        <Card type ="sm"/>
        <Card type ="sm"/>
        <Card type ="sm"/>
        <Card type ="sm"/>
        <Card type ="sm"/>
        <Card type ="sm"/>
        
      </Recommdation> */}
      
    </Container>
  )
}

export default Video
