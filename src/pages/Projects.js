import React from "react";
import styled from "styled-components";
//Images
import moon from "../img/crescent.svg";
import waves from "../img/Waves.png";
import pokemon from "../img/pokemon.png";
import img from "../img/trees1.jpg";
//Animations
import {motion} from 'framer-motion';
import { pageAnimation } from '../animation';
import AnchorLink from 'react-anchor-link-smooth-scroll';



const Projects = () => {
    return (
        <motion.div exit="exit" variants={pageAnimation} initial='hidden' animate='show'>
        <OtherBackground>
            <Container>
            <h1>Projects</h1>
                <ProjectFinished>
                    <AnchorLink href="#project1">
                        <img src={waves} alt="a moon" 
                        />
                    </AnchorLink>
                </ProjectFinished>
                <ProjectFinished>
                    <AnchorLink href="#project2">
                        <img src={pokemon}  alt="a moon" 
                        />
                        </AnchorLink>
                        </ProjectFinished>
                <Project><img src={moon} alt="a moon" />
                </Project>
            </Container>
        </OtherBackground>
        <section id="project1">
            <Background>
                <Image>
                <a href="https://acmusicapp.netlify.app"><img src={waves} alt="a moon"/></a>
                </Image>
                <Text>
                    <h1>React Music Player</h1>
                    <p>A simple and beautiful music application. This was my first real project with React, I had a ton of fun making it! I plan on adding a dark mode.</p>
                </Text>
            </Background>
        </section>
        <section id="project2">
        <Background>
        <Image>
        <a href="https://alexx1701.github.io"><img src={pokemon} alt="a moon"/></a>
                </Image>
                <Text>
                    <h1>Choose Your Pokemon! API</h1>
                    <p>This project was a blast to work on! It's a simple HTML/CSS/Javascript project that utilizes the Pokemon API in a fun way.</p>
                </Text>
        </Background>
        </section>
        </motion.div>
    )
}
const Background = styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: row;
background-color: #3d44428f;
@media screen and (max-width: 768px){
        align-items: center;
        flex-direction: column;
    }
`
const OtherBackground = styled.div`
width: 100vw;
height: 90vh;
display: flex;
background-image: url(${img});
background-size: cover;
@media screen and (max-width: 768px){
        height: 95vh;
    }
    
`

const Container = styled.div`
    min-height: 85vh;
    min-width: 95vw;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    h1 {
        position: absolute;
        align-self: flex-start;
        font-size: 4rem;
        color: #ecebeb;
        text-shadow: 1px 2px 2px rgba(255, 161, 79, 0.733);
        @media screen and (max-width: 768px){
            font-size: 3rem;
            position: relative;
            align-self: center;
    }
    }
    
    @media screen and (max-width: 768px){
        align-items: center;
        flex-direction: column;
    }
    
`
const Project = styled.div`
    img {
        min-width: 30vw;
        opacity: 80%;
        
    }
    
`

const ProjectFinished = styled.div`
    img {
        width: 30vw;
        border-radius: 50%;
        object-fit: cover;
        filter: drop-shadow(0 0 0.1rem grey);
        &:hover{
            transform: translatey(-1rem);
        }
        
    }
`
const Image = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0rem 4rem;
    //background-color: red;
    img {
        margin-top: 5rem;
        border-radius: 50%;
        height: 75vh;
        width: 75vh;
        border-color: #56696dff;
        border-style: hidden solid dotted;
        &:hover{
            filter: blur(1px);
        }
        @media screen and (max-width: 768px){
        height: 50vh;
        width: 50vh;
    }
    }
    
`
const Text = styled.div`
    flex-direction: column; 
    display: flex;
    height: 60vh;
    margin: 0rem 4rem;
    justify-content: center;
    h1{
        text-shadow: 1px 2px 2px rgba(255, 161, 79, 0.733);
        font-size: 4rem;
        @media screen and (max-width: 768px){
            font-size: 2rem;
            flex-direction: none;
    }
}
    @media screen and (max-width: 768px){
        font-size: 1rem;
        height: 10vh;
        margin-top:2rem;
    }
    
    
`
export default Projects;