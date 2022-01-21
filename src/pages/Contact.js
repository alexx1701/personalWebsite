import React from 'react';
import styled from "styled-components";
import trees from "../img/trees.jpg";
//Animations
import {motion} from 'framer-motion';
import { pageAnimation } from '../animation';

const Contact = () => {
    return (
        <motion.div exit="exit"variants={pageAnimation} initial='hidden' animate='show'>
        <Background>
        <Main>
            <Circle></Circle>
           <Title><a href="mailto: alexandra.christopher@outlook.com"><h2>Send an email</h2></a>
           <a href="https://www.linkedin.com/in/alexandrachristopher/"><h2>LinkedIn</h2></a>
           <a href="https://github.com/alexx1701"><h2>GitHub</h2></a>
           </Title>
        </Main>
        </Background>
        </motion.div>
    )
}
const Background = styled.div`
width: 100vw;
height: 90vh;
background-image: url(${trees});
background-size: cover;
display: flex;
align-items: center;
justify-content: center;
`
const Main=styled.div`
 display: flex;
 justify-content: center;
 align-items: center;

`
const Title = styled.div`
  color: rgb(193, 201, 204);
  display: flex;
  flex-direction: column;
    z-index: 1;
    line-height: .9;
    a {
        color: inherit; /* blue colors for links too */
        text-decoration: inherit; /* no underline */
}
    }
  h1{
      font-size: 2rem;
  }
  h2 {
      font-size: 3.5rem;
      font-weight:lighter;
      &:hover{
          transform: translatex(.5rem);
          text-shadow: 1px 1px 2px rgba(250, 220, 193, 0.5);
      }
  }
`
const Circle = styled.div`
  min-height: 70vh;
  min-width: 70vh;
  background-color: #56696dff;
  opacity: 0.8;
  border-radius: 50%;
  position: absolute;
`
export default Contact;