import React, { useState } from 'react'
import styled from 'styled-components'
import axios from "axios"
import { useDispatch } from 'react-redux'
import { loginStart, loginfailure } from '../redux/userSlice'
import {loginSuccess } from "../redux/userSlice"
import {auth,provider} from "../firebase"
import {signInWithPopup} from "firebase/auth"
const Container = styled.div`
           display : flex;
           align-items : center;
           flex-direction : column;
           justify-content :center;
           height : calc(100vh - 56px);
           color : ${({theme})=> theme.text};
`
const Wrapper = styled.div`
     display : flex;
     align-items : center;
     flex-direction : column;
     background-color : ${({theme})=> theme.bgLighter};
     border : ${({theme})=> theme.soft};
     gap : 10px;
     padding : 20px 50px;
`
const Title = styled.h1`
    font-size : 24px;
`
const SubTitle = styled.h2`
   font-size : 24px;
   font-weight : 300;
`
const Button = styled.button`
    border-radius : 3px;
    border : none;
    padding : 10px 20px;
    font-weight : 500;
    cursor : pointer;
    background-color : ${({theme})=> theme.soft};
    background-color : ${({theme})=> theme.textSoft};
`
const Input = styled.input`
     border : 1px solid ${({theme})=> theme.Soft};
     width : 100%;
     border-radius : 3px;
     padding : 10px;
     background-color : transparent;
`

const More = styled.div`
     display : flex;
     font-size : 12px;
     margin-top : 10px;
     color : ${({theme})=> theme.textSoft}
`
const Links = styled.div`
    margin-left : 50px;
`
const Link = styled.span``
const Signin = () => {
  const [name ,setname ] = useState("")
  const [email ,setemail ] = useState("")
  const [password ,setpassword ] = useState("")
  const dispatch = useDispatch()

  const handlerLogin = async(e)=>{
    e.preventDefault();
    dispatch(loginStart())
    try{
      const res = await axios.post("/auth/signin",{name,password})
      // console.log(res.data);
      dispatch(loginSuccess(res.data))
    }catch(err){
      // console.log(err)
      dispatch(loginfailure())
    }
  }
  const signInWithGoogle = async()=>{
    dispatch(loginStart())
    signInWithPopup(auth,provider)
    .then((result)=>{
        axios.post("/auth/googleAuth",{
        name : result.user.displayName,
        email : result.user.email,
        img : result.user.photoURL
      }).then((res)=>{
        dispatch(loginSuccess(res.data))
      })
      // console.log(result);
    })
    .catch((error)=>{
      dispatch(loginfailure())
      
    })
  }
  return (
    <Container>
      <Wrapper>
        <Title>Sign in</Title>
        <SubTitle>to continue to CoderFirst</SubTitle>
        <Input placeholder='UserName' onClick={(e)=>setname(e.target.value)}/>
        <Input type='password' placeholder='Password' onClick={(e)=>setpassword(e.target.value)}/>
        <Button onClick={handlerLogin}>Sign in</Button>
        <Title>or</Title>
        <Button onClick={signInWithGoogle}>SignIn with Google</Button>
        <Title>or</Title>
        <Input placeholder='UserName' onClick={(e)=>setname(e.target.value)}/>
        <Input placeholder='email'  onClick={(e)=>setemail(e.target.value)}/>
        <Input type='password' placeholder='Password' onClick={(e)=>setpassword(e.target.value)}/>
        <Button>Sign up</Button>


      </Wrapper>
      <More>
        English(USA)
        <Links>
         <Link>Help</Link>
         <Link>Privacy</Link>
         <Link>Terms</Link>
        </Links>
      </More>
    </Container>
  )
}

export default Signin
