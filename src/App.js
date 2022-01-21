import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import Main from "./pages/Main";
import Nav from "./components/nav";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { Routes, Route, useLocation } from 'react-router-dom';
//Animation
import {AnimatePresence} from 'framer-motion';

function App() {
  const location = useLocation();

  return (
    <div>
      <GlobalStyle/>
      <Nav />
      <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
      <Route path="/" exact element={<Main/>} />
      <Route path="/projects" exact element={<Projects/>} />
      <Route path="/resume" exact element={<Contact/>} />
      </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
