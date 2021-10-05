import { useState, useEffect } from "react";
import styled from "styled-components";

import Card from "../Card";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

//SYLED-COMPONENTS
export const Content3Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  background: rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 980px) {
    transform: scale(0.8);
    padding: 0;
    width: 100vw;
  }
`;

export const Content3Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  padding: 20px;

  > div {
    display: flex;
    overflow-x: scroll;
    height: 100%;
    width: 100%;
    margin: 0 20px;
    background: rgba(0, 0, 0, 0.05);
    padding: 20px;
    scroll-behavior: smooth;
    scrollbar-width: thin;

    > * {
      margin-left: 50px;
    }
  }

  @media screen and (max-width: 980px) {
    width: 100%;
    padding: 0;
  }
`;

export const LeftArrow = styled(BiChevronLeft)`
  height: 100px;
  width: 100px;
  cursor: pointer;

  &:hover {
    background: black;
    fill: white;
  }

  @media screen and (max-width: 980px) {
    display: none;
  }
`;

export const RightArrow = styled(BiChevronRight)`
  height: 100px;
  width: 100px;
  cursor: pointer;

  &:hover {
    background: black;
    fill: white;
  }

  @media screen and (max-width: 980px) {
    display: none;
  }
`;

//MAIN RENDER
const Content3 = () => {
  //LOGIC
  const [content3Data, setContent3Data] = useState([]);

  useEffect(() => {
    const gettingData = async () => {
      const res = await fetch("http://activitiesapi.herokuapp.com/api/act");
      const data = await res.json();

      setContent3Data(data);
    };

    gettingData();
  }, []);

  const nextArrow = () => {
    let content = document.getElementById("content3Content"),
      scrollWidth = 1870;

    if (content.scrollLeft >= scrollWidth) {
      content.scrollLeft = 0;
    } else {
      content.scrollLeft += 600;
    }
  };

  const prevArrow = () => {
    let content = document.getElementById("content3Content"),
      scrollWidth = 200;

    if (content.scrollLeft <= scrollWidth) {
      content.scrollLeft = 2070;
    } else {
      content.scrollLeft -= 600;
    }
  };

  // RETURN
  return (
    <Content3Container>
      <Content3Content>
        <LeftArrow onClick={prevArrow} />
        <div id="content3Content">
          {content3Data.map((product, index) => {
            return (
              <Card
                key={index}
                width="300px"
                height="650px"
                // src={product.pics[0].src}
                price
                alt={product.pics[0].alt}
                name={product.name}
                description={product.desc}
              />
            );
          })}
        </div>
        <RightArrow onClick={nextArrow} />
      </Content3Content>
    </Content3Container>
  );
};

export default Content3;
