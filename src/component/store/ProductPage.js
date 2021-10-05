import { Link } from "react-router-dom";
import styled from "styled-components";

import { IoIosArrowRoundBack } from "react-icons/io";

//STYLED-COMPONENTS
export const GoBack = styled(Link)`
  display: flex;
  align-items: center;
  width: 100px;
`;

export const ProductItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
  background: rgba(0, 0, 0, 0.05);
`;
export const ProductItemContent = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template-columns: 60% 35%;
  /* grid-gap: 50px; */
  height: 500px;
  width: 100%;
`;
export const ProductItemImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;
export const ProductItemRightContent = styled.div`
  height: 100%;
  width: 100%;
`;
export const ProductItemName = styled.div`
  font-size: 3rem;
  font-weight: 400;
  line-height: 3rem;
`;
export const ProductItemPrice = styled.div`
  font-size: 1.5rem;
`;
export const ProductItemDescription = styled.div``;

//MAIN RENDER
const ProductPage = (props) => {
  //LOGIC

  //RETURN
  return (
    <>
      <GoBack to="/store" style={{ marginBottom: "20px" }}>
        <IoIosArrowRoundBack
          style={{ height: "20px", width: "auto", marginRight: "10px" }}
        />
        Go Back
      </GoBack>
      <ProductItemContainer onClick={() => console.log(props.itemData)}>
        <ProductItemContent>
          <ProductItemImage src={props.itemData.img.src}></ProductItemImage>
          <ProductItemRightContent>
            <ProductItemName>{props.itemData.name}</ProductItemName>
            <ProductItemPrice>{props.itemData.price}</ProductItemPrice>
            <ProductItemDescription>
              {props.itemData.description}
            </ProductItemDescription>
          </ProductItemRightContent>
        </ProductItemContent>
      </ProductItemContainer>
    </>
  );
};

export default ProductPage;
