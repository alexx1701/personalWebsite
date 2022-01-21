import React from "react";
import styled from "styled-components";
import img from "../img/self.jpg"
import resume from "../file/Alexandra_Christopher_Resume.pdf"
//import { useInView } from "react-intersection-observer";
//import { DragControls, useAnimation } from "framer-motion";

const AboutMe = () => {
    /*const controls = useAnimation();
    const [element, view] = useInView({ threshold: 0.5 });
    if (view) {
        controls.start("show");
    } else {
        controls.start("hidden");
    }*/
    return (
        <div id="about">
            <Background>
                
                <Image>
                    <img src={img} alt="" />
                </Image>
                <Text>
                    <h1>About Me</h1>
                    <p>Ambitious and self-motivated front-end developer. I love the creativity and freedom in building your own applications and websites. I am continuously looking to grow and improve my skills and knowledge!</p><br/>
                    <p>Hobbies: Eating, Studying Languages, Web Design, Reading, Video Games</p>
                    <a href={resume} target="_blank" rel="noreferrer">Resume</a>
                </Text>
                
            </Background>
        </div>
    )
}
const Background = styled.div`
width: 100vw;
height: 100vh;
background-color: #3d44428f;
`
const Image = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    img {
        margin-top: 5rem;
        border-radius: 50%;
        height: 50vh;
        border-color: #56696dff;
        border-style: hidden solid dotted;
    }
`
const Text = styled.div`
    flex-direction: column; 
    display: flex;
    padding-left: 2rem;
    margin: 2rem;
    h1{
        text-shadow: 1px 2px 2px rgba(242, 116, 5, 0.5);
        font-size: 4rem;
    }
    a {
        color: rgb(242, 116, 5); /* blue colors for links too */
        text-decoration: inherit; /* no underline */
        font-size: 1.5rem;
}`

export default AboutMe;