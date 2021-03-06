import React from 'react';
import styled from 'styled-components';
import img from '../img/wallpaper.png';
import { motion } from 'framer-motion';



const Hero = () => {
   const titleAnim = {
        hidden: {opacity: 0},
        show: { opacity: 1, transition: {duration: 1}},
    };
    const container = {
        hidden: {x:25},
        show: {
            x: 0,
            transition: {
                duration: 0.75,
                staggerChildren: 1,
            }
        }
    };
    //const [element, view] = useInView( {threshold: 0.5 });
    return (
        <div>
            <Background>
            <Main>
                <Circle>
                </Circle>
                <Title>
                    <motion.div variants={container}
                    initial="hidden"
                    animate="show">
                    <motion.h1 variants={titleAnim}> Alexandra </motion.h1>
                    <motion.h1 variants={titleAnim}>Christopher</motion.h1>
                    <motion.h2 variants={titleAnim}>Front-End Developer</motion.h2>
                    </motion.div>
                </Title>
                </Main>
            </Background>
            
        </div>
    )
}
//Styled 
const Background=styled.div`
background-image: url(${img});
width: 100vw;
height: 90vh;
background-size: cover;
display: flex;
align-items: center;
justify-content: center;
-webkit-user-select: none;  /* Chrome all / Safari all */
-moz-user-select: none;     /* Firefox all */
-ms-user-select: none;      /* IE 10+ */
user-select: none;  
`
const Main=styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
`
const Title = styled.div`
  color: rgb(193, 201, 204);
  text-shadow: 1px 1px 2px rgba(255, 161, 79, 0.733);
  display: flex;
  flex-direction: column;
    z-index: 1;
    line-height: .9;
  h1{
      font-size: 5.5rem;
      @media screen and (max-width: 768px){
      font-size: 5rem;
  }
  }
  h2 {
      font-size: 3.5rem;
      font-weight:lighter;
      @media screen and (max-width: 768px){
      font-size: 3rem;
  }
  }
`
const Circle = styled(motion.div)`
  height: 85vh;
  width: 85vh;
  background-color: #56696dff;
  opacity: 0.8;
  border-radius: 50%;
  position: absolute;
  @media screen and (max-width: 768px){
      height: 45vh;
      width: 45vh;
  }
`

export default Hero;