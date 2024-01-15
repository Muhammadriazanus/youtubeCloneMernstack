import React, { useEffect } from 'react'
import Card from "../Component/Card"
import styled from 'styled-components'
import axios from "axios";
import { useState } from 'react';

const Container = styled.div` 
          display : flex;
          justify-content : space-between;
          flex-wrap : wrap;
`
const Home = ({type}) => {
  const [videos, setVideo] = useState([])

  useEffect(() => {
    const fecthVideo = async () => {
      try {
        const res = await axios.get(`/videos/${type}`)
        setVideo(res.data)
        // console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    fecthVideo()
  }, [type])
  return (
    <Container>
      {videos?.map((videos) => (
        <Card   key={videos._id} videos={videos}/> 
      ))}
      
        
    </Container>

  )
}

export default Home
