import React from "react";
import styled from "styled-components";
import img from "../img/self.jpg"
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
        <div>
            <Background>
                <Image>
                    <img src={img} alt="" />
                </Image>
                <Text>
                    <h1>About Me</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis reprehenderit debitis possimus. Recusandae iure alias, temporibus nostrum illo debitis mollitia?</p>
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
    min-height: 60vh;
    padding-left: 2rem;
    padding: 5rem 10rem; 
`
export default AboutMe;