import { useState } from "react";
import styled from "styled-components";

import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { ImageData } from "../../data/Content1ImagesData";

//STYLED-COMPONENTS
export const Content1Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 100%;
  padding: 150px 0;
`;

export const Content1Content = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 90%;

  * {
    color: white;
  }

  > div {
    width: 60%;

    > h1 {
      font-family: "Poppins", sans-serif;
      font-weight: 900;
      font-size: 5rem;
      text-transform: uppercase;
      line-height: 5rem;

      @media screen and (max-width: 980px) {
        font-size: 3rem;
      }
    }

    > p {
      font-family: "Poppins", sans-serif;
      font-weight: 300;
      text-align: justify;
    }

    @media screen and (max-width: 980px) {
      width: 100%;
    }
  }

  @media screen and (max-width: 980px) {
    align-items: center;

    * {
      text-align: center;
    }
  }
`;

export const ArrowContainer = styled.div`
  position: absolute;
  bottom: 5%;
  right: 5%;

  * {
    height: 50px;
    width: auto;
    cursor: pointer;
    color: white;
    background: black;

    &:hover {
      fill: black;
      background: white;
      border: 1px solid white;
    }
  }
`;

export const LeftArrow = styled(BiChevronLeft)``;

export const RightArrow = styled(BiChevronRight)``;

export const Content1Image = styled.img`
  z-index: -1;
  position: absolute;
  height: 100%;
  width: 100vw;
  background: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.2)),
    ${(props) => {
      return `url(${props.bgImg[props.imgIndex]})`;
    }};
  background-position: top;
`;

//MAIN RENDER
const Content1 = () => {
  //LOGIC
  let [imgIndex, setImageIndex] = useState(0);

  function nextArrow() {
    imgIndex === ImageData.length - 1
      ? setImageIndex(0)
      : setImageIndex((imgIndex += 1));
  }

  function prevArrow() {
    imgIndex === 0
      ? setImageIndex(ImageData.length - 1)
      : setImageIndex((imgIndex -= 1));
  }

  //RETURN
  return (
    <Content1Container>
      <Content1Content>
        <div>
          <h1>Helloooooo!!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            labore nobis recusandae odit porro sit iste animi quasi impedit rem
            veritatis, consectetur obcaecati eaque praesentium corrupti. Harum
            reiciendis officia praesentium! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Repudiandae labore nobis recusandae
            odit porro sit iste animi quasi impedit rem veritatis, consectetur
            obcaecati eaque praesentium corrupti. Harum reiciendis officia
            praesentium!
          </p>
        </div>
      </Content1Content>
      <ArrowContainer>
        <LeftArrow onClick={prevArrow} />
        <RightArrow onClick={nextArrow} />
      </ArrowContainer>
      <Content1Image bgImg={ImageData} imgIndex={imgIndex} />
    </Content1Container>
  );
};

export default Content1;
