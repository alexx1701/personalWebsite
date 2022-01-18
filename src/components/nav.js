import React from "react";
import styled from "styled-components";

const Nav = () => {
    return (
        <StyledNav>
            <h1><a id="logo"href="#">Capture</a></h1>
            <ul>
                <li>
                    <a href="#">Title</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Projects</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
        </StyledNav>
    );
};

const StyledNav = styled.nav`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background: red;
    a {
        color: white;
        text-decoration: none;
    }
    ul {
        display: flex;
        list-style: none;
    }
    #logo {
        font-size: 1.5rem;
        font-weight: lighter;
    }
    li {
        padding-left: 5rem;
        position: relative;
    }
`

export default Nav;