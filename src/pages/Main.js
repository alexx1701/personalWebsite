import React from "react";
import Hero from "../components/HeroSection";
import AboutMe from "../components/AboutSection";
import Projects from "../components/ProjectSection";
import Contact from "../components/ContactSection";


const Main = ( ) => {
    return (
        <div>
            <Hero />
            <AboutMe />
            <Projects />
            <Contact />
        </div>
    )
}

export default Main;