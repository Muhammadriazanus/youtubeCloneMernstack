import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
     display : flex;
     gap : 10px;
     margin : 30px 0px;
`
const Avatar = styled.img`
width  : 100px;
height : 50px;
border-radius : 50%;

`
const Details = styled.div`
               display : flex;
               flex-direction : column;
               gap : 10px;
`
const Name = styled.span`
     font-size : 13px;
     font-weight : 500;
    //  color : white;
`
const Date = styled.span`
     font-size : 13px;
     font-weight : 400;
     color : ${({theme})=> theme.textSoft};
     margin-left : 5px;
`
const Text = styled.span`
   font-size : 12px;
   color : ${({theme})=> theme.textSoft};
`
const Comment = () => {
  return (
    <Container>
      <Avatar src='https://media.gettyimages.com/photos/happy-lama-picture-id155159495' />
      <Details>
        <Name>
          jonh Doe <Date>1 day ago</Date>
        </Name>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, facere deleniti consequatur labore consequuntur fugiat, soluta, nobis voluptates quas vero laudantium sint non voluptatibus. Esse delectus amet repellat aspernatur quisquam.
        </Text>
      </Details>
    </Container>
  )
}

export default Comment
