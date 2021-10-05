import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BiMenu, BiX } from "react-icons/bi";

//styled-components

export const HeroContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  background: black;
  height: auto;
  width: 100vw;
  padding: 10px 0;
  z-index: 5;

  *,
  a {
    font-family: "Poppins", sans-serif;
    color: white;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 90%;
`;

export const HeroLogo = styled(Link)`
  font-weight: 900;
  font-size: 2.5rem;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.2s opacity ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;

export const HeroLinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;

  @media screen and (max-width: 980px) {
    position: absolute;
    top: 0;
    left: 0;
    height: ${(props) => (props.menuActive ? "100vh" : "0")};
    width: 100vw;
    background: black;
    flex-direction: column;
    overflow-y: hidden;
    transition: 0.2s height ease-in-out;
  }
`;

export const HeroLinks = styled.div`
  display: flex;

  @media screen and (max-width: 980px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const HeroLink = styled(Link)`
  position: relative;
  display: block;
  transition: 0.2s all ease-in-out;
  transition-property: opacity, transform;

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -10px;
    height: 8px;
    width: 0%;
    background: white;
    transform: translateX(-50%);
    transition: 0.2s all ease-in-out;
  }

  &:not(:first-of-type) {
    margin-left: 20px;

    @media screen and (max-width: 980px) {
      margin-left: 0;
    }
  }

  &:hover {
    transform: translateY(-5px);
    opacity: 0.8;

    &::after {
      width: 100%;
    }
  }

  @media screen and (max-width: 980px) {
    margin: 2vh 0;
  }
`;

export const HeroSignUp = styled(Link)`
  padding: 10px 30px;
  background: none;
  border-radius: 20px;
  border: 1px solid white;
  cursor: pointer;
  margin-left: 100px;
  transition: 0.2s all ease-in-out;
  transition-property: background, color, transform;

  &:hover {
    background: white;
    color: black;
    transform: translateY(-5px);
  }

  @media screen and (max-width: 980px) {
    margin-left: 0;
    margin-top: 2vh;
  }
`;

export const HeroMenuButton = styled(BiMenu)`
  fill: white;
  display: none;
  height: 50px;
  width: 50px;
  cursor: pointer;
  z-index: 10;
  transition: 0.2s opacity ease-in-out;

  &:hover {
    opacity: 0.8;
  }

  @media screen and (max-width: 980px) {
    display: block;
  }
`;

export const HeroXButton = styled(BiX)`
  fill: white;
  display: none;
  height: 50px;
  width: 50px;
  cursor: pointer;
  z-index: 10;
  transition: 0.2s opacity ease-in-out;

  &:hover {
    opacity: 0.8;
  }

  @media screen and (max-width: 980px) {
    display: block;
  }
`;

//Main Render

const Navbar = () => {
  // UseStates
  const [menuActive, setMenuActive] = useState(false);

  //Logic
  function menuActiveToggler() {
    if (window.innerWidth < 981) {
      setMenuActive(!menuActive);
    }
  }

  // Return
  return (
    <HeroContainer>
      <HeroContent>
        <HeroLogo to="/">Hellooo</HeroLogo>
        <HeroLinksContainer menuActive={menuActive} onClick={menuActiveToggler}>
          <HeroLinks>
            <HeroLink to="/">Home</HeroLink>
            <HeroLink to="/store">Store</HeroLink>
            <HeroLink to="/about">About</HeroLink>
            <HeroLink to="/contact-us">Contact Us</HeroLink>
          </HeroLinks>
          <HeroSignUp to="/sign-up">Sign Up</HeroSignUp>
        </HeroLinksContainer>
        {menuActive ? (
          <HeroXButton onClick={menuActiveToggler} />
        ) : (
          <HeroMenuButton onClick={menuActiveToggler} />
        )}
      </HeroContent>
    </HeroContainer>
  );
};

export default Navbar;
