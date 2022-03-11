import React from "react";
import styled from "styled-components";
import {motion} from 'framer-motion';
//import images from '../img/img.js';
import projects from '../data';
import { pageAnimation } from '../animation';
import { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faDesktop } from "@fortawesome/free-solid-svg-icons";


const NewProjects = () => {
  
    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
      }, []);

    return (
    <motion.div exit="exit" variants={pageAnimation} initial='hidden' animate='show' className="App">
        <Background>
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
          <Button onClick={() => window.open(project.github)}>
          <FontAwesomeIcon className="icon" icon={faCode} size="2x"/>
          GitHub</Button>
          <Button onClick={() => window.open(project.live)}>
          <FontAwesomeIcon className="icon" icon={faDesktop} size="2x"/>
            Live</Button>
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
overflow: hidden;
background-color: #3d44428f;
@media screen and (max-width: 768px){
        height: 95vh;
    }
    
`

const Item = styled(motion.div) 
  `height: 80vh;
  padding: 30px 10px;
  min-width: 25rem;
  display: flex;
  justify-content: center;
  overflow: hidden;
  @media screen and (max-width: 768px){
    min-width: 40rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2rem;
    
  }
  
  .img 
    {
      padding-top: 5rem;
      height: 60vh;
      width: 60h;
    pointer-events: none;
    @media screen and (max-width: 768px){
      height: 60vh;
      width: 50vh;
    }
    }
  
  `
  const STitle = styled.h2`
    position: absolute;
    display: flex;
    white-space: nowrap;
    font-size: 2rem;

  @media screen and (max-width: 768px){
    font-size:3rem;
    padding-bottom: 45rem;
    
    
  `

  const Links = styled.div `
    position: absolute;
    display: flex;
    padding-top: 50px;
  `
  const Button = styled.button`
    font-size: .8rem;
    border-radius: 25%;
    margin: 6px;
    width: 6rem;
    height: 4rem;
    padding: 10px 20px;
    border-style: solid;
    transform: translatey(27rem);
    

    @media screen and (max-width: 768px){
        height: 5rem;
        padding: 10px 20px;
        font-size: 1rem;
        width: 8rem;
        transform: translatey(22rem);
    }
    &:hover {
      background-color: white;
      color: #1b1b1b;
    }
    .icon {
      display: flex;
      padding-left: 10px;
    }
  `
const ICarousel = styled(motion.div) 
   ` display: flex;
    
   `
  
const Carousel = styled(motion.div)
    `cursor: grab;
    overflow: hidden;
    padding-top: 50px;
   
    `
  
  
export default NewProjects;