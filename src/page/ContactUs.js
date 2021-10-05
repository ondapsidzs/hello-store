import styled from "styled-components";

import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

//STYLED_COMPONENTS
export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  padding: 100px 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;

  > span {
    font-weight: 300;
    font-size: 0.85rem;
    letter-spacing: 0.5rem;
  }

  > h1 {
    font-weight: 900;
    font-size: 6rem;
    line-height: 100%;

    @media screen and (max-width: 980px) {
      font-size: 3rem;
    }
  }

  @media screen and (max-width: 980px) {
    justify-content: center;
    text-align: center;
  }
`;

export const IconsContainer = styled.div`
  display: flex;

  * {
    height: 200px;
    width: auto;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }

    @media screen and (max-width: 980px) {
      height: 100px;
    }
  }

  @media screen and (max-width: 980px) {
    justify-content: center;
  }
`;

//MAIN_RENDER
const ContactUs = () => {
  //RETURN
  return (
    <Container>
      <Content>
        <span>Hello!?</span>
        <h1>Contact Us</h1>
        <IconsContainer>
          <AiFillFacebook />
          <AiFillInstagram />
          <AiFillLinkedin />
        </IconsContainer>
      </Content>
    </Container>
  );
};

export default ContactUs;
