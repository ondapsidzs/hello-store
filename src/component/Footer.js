import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

//Styled-components
export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 100vw;
  background: black;
  padding: 100px 0;

  *,
  a {
    color: white;
    font-family: "Poppins", sans-serif;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin-bottom: 30px;

  @media screen and (max-width: 980px) {
    flex-direction: column;
  }
`;

export const FooterBrandContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 0.5;

  @media screen and (max-width: 980px) {
    align-items: center;
  }
`;

export const FooterLogo = styled(Link)`
  font-weight: 900;
  font-size: 3rem;
  text-transform: uppercase;
  line-height: 3rem;
  transition: 0.2s opacity ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;

export const FooterLogoName = styled.div`
  font-weight: 300;
`;

export const FooterLinksContainer = styled.div`
  @media screen and (max-width: 980px) {
    margin: 30px 0;
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 980px) {
    align-items: center;
  }
`;

export const FooterLink = styled(Link)`
  transition: 0.2s opacity ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;

export const FooterIcons = styled.div`
  flex-grow: 3;
  text-align: right;

  * {
    height: 50px;
    width: auto;
    cursor: pointer;
    transition: 0.2s all ease-in-out;
    transition-property: opacity, transform;

    &:not(:first-of-type) {
      margin-left: 5px;
    }

    &:hover {
      transform: translateY(-5px);
      opacity: 0.8;
    }
  }
`;

export const FooterFacebook = styled(AiFillFacebook)``;

export const FooterInstagram = styled(AiFillInstagram)``;

export const FooterLinkedin = styled(AiFillLinkedin)``;

export const FooterCopyright = styled.div`
  font-weight: 300;
  font-size: 0.85rem;
`;

//Main Render
const Footer = () => {
  //Return
  return (
    <FooterContainer>
      <FooterContent>
        <FooterBrandContainer>
          <FooterLogo to="/">Hellooo</FooterLogo>
          <FooterLogoName>hellooo Inc.</FooterLogoName>
        </FooterBrandContainer>
        <FooterLinksContainer>
          <FooterLinks>
            <FooterLink to="/">Home</FooterLink>
            <FooterLink to="/store">Store</FooterLink>
            <FooterLink to="/about">About</FooterLink>
            <FooterLink to="/contact-us">Contact Us</FooterLink>
          </FooterLinks>
        </FooterLinksContainer>
        <FooterIcons>
          <FooterFacebook />
          <FooterInstagram />
          <FooterLinkedin />
        </FooterIcons>
      </FooterContent>
      <FooterCopyright>
        Hellooo &copy;2021. This is copyright a thing.
      </FooterCopyright>
    </FooterContainer>
  );
};

export default Footer;
