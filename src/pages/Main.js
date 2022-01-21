import React from "react";
import Hero from "../components/HeroSection";
import AboutMe from "../components/AboutSection";
//Animations
import {motion} from 'framer-motion';
import { pageAnimation } from '../animation';


const Main = ( ) => {
    return (
        <motion.div exit="exit" variants={pageAnimation} initial='hidden' animate='show'>
            <Hero />
            <AboutMe />
        </motion.div>
    )
}

export default Main;