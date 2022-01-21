import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import img from '../img/moon_stars.svg';

const Nav = () => {
    return (
        <StyledNav>
            <img src={img} alt="a moon" />
            <ul>
                <li>
                    <Link to='/'>Main</Link>
                </li>
                <li>
                    <Link to='/projects'>Projects</Link>
                </li>
                <li>
                    <Link to='/resume'>Contact</Link>
                </li>
            </ul>
        </StyledNav>
    );
};

const StyledNav = styled.nav`
    min-height: 10vh;
    width: 100vw;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background: #56696dff;
    opacity: .8;
    @media screen and (max-width: 768px){
      font-size: 1rem;
      justify-content: center;
  }
    //filter: drop-shadow(0 0 0.2rem black);
    a {
        color: white;
        text-decoration: none;
    }
    ul {
        display: flex;
        list-style: none;
    }
    }
    li {
        padding-left: 5rem;
        position: relative;
    }
`

export default Nav;