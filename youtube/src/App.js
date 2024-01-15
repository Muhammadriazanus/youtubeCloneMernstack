import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { darkTheme, lightTheme } from './utilies/utilies.js';
import styled, { ThemeProvider } from "styled-components"
import Menu from "../src/Component/Menu"
import Navbar from './Component/Navbar';
import { useState } from 'react';
import Home from './page/Home.jsx';
import Signin from "./page/Signin.jsx"
import Video from './page/video.jsx';
import { useParams } from 'react-router-dom';
const Container = styled.div`
   display  : flex;
  //  background-color : ${({ theme }) => theme.soft}
`
const Main = styled.div`
   flex : 7;
   background-color : ${({ theme }) => theme.soft}
`
const Wrapper = styled.div`
        padding: 50px 35px;
`

function App() {
  const [darkMode, setDarkMode] = useState(true)
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
        <Main>
          <Navbar />
          <Wrapper>
            <Routes>
              <Route path='/' element={<Home type="random"/>} />
              <Route path='/trends' element={<Home type="trend"/>} />
              <Route path='/subscription' element={<Home type="sub"/>} />
              {/* <Route path='/' element={<Home />} /> */}
              <Route path='/signin' element={<Signin />} />
              <Route path='/video/:id' element={<Video />} />
            </Routes>
          </Wrapper>
        </Main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
