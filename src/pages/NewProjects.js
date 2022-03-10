import React from "react";
import styled from "styled-components";
import {motion} from 'framer-motion';
//import images from '../img/img.js';
import projects from '../data';
import { pageAnimation } from '../animation';
import { useRef, useEffect, useState } from "react";


const NewProjects = () => {
  
    const [width, setWidth] = useState(0);
    const [hoverPopup, setHoverPopup] = useState(false);
    const carousel = useRef();

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
      }, []);

    return (
    <motion.div exit="exit" variants={pageAnimation} initial='hidden' animate='show' className="App">
        <Background>
        {/* <Title>Projects</Title> */}
    <Carousel
    className="carousel"
    ref = {carousel}
    whileTap = {{cursor: "grabbing"}}>
    <ICarousel 
    drag="x" 
    dragConstraints={{ right: 0, left: -width}}
    className="inner-carousel"
    >

    {projects.map((project) => {
      return (
          <Item className="item" key={project.image} >
          <STitle>{project.title}</STitle>
          <Links>
          <Button onClick={() => window.open(project.github)}>GitHub</Button>
          <Button onClick={() => window.open(project.live)}>Live</Button>
          </Links>
          <img className="img" src={project.image} alt="" /> 
          </Item>
      )
    })}
    </ICarousel>
    </Carousel>
    </Background>
  </motion.div>
);
}
/* const Title = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;

` */
const Background = styled.div`
width: 100vw;
height: 100vh;
background-color: #3d44428f;
@media screen and (max-width: 768px){
        height: 95vh;
    }
    
`

const Item = styled(motion.div) 
  `min-height: 25rem;
  padding: 30px 10px;
  min-width: 25rem;
  display: flex;
  justify-content: center;
  overflow: hidden;

  

  .img 
    {
      padding-top: 8rem;
    width: 100%;
    height: 100%;
    pointer-events: none;
    }
  .grey {
    filter: grayscale(100%);
  }
  `
  const STitle = styled.h2`
    position: absolute;
    display: flex;
    white-space: nowrap;
  `

  const Links = styled.div `
    position: absolute;
    display: flex;
    padding-top: 50px;
  `
  const Button = styled.button`
    font-size: .8rem;
    border-radius: 25%;
    padding: 15px;
    margin: 5px;
    width: 5rem;
    height: 3rem;
    border-style: solid;
    @media screen and (max-width: 768px){
        height: 4rem;
        width: 5rem;
        padding: 2px;
        transform: translatey(-20px);
    }
    &:hover {
      background-color: white;
      color: #1b1b1b;
    }
  `
const ICarousel = styled(motion.div) 
   ` display: flex;
   `
  
const Carousel = styled(motion.div)
    `cursor: grab;
    overflow: hidden;
    `
  
  
export default NewProjects;