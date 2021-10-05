import styled from "styled-components";
//STYLED-COMPONENTS
export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${(props) => (props.height ? props.height : "100%")};
  width: ${(props) => (props.width ? props.width : "100%")};
  min-width: 300px;
  background: ${(props) => (props.background ? props.background : "white")};
  padding: 20px;
`;

export const CardContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  width: 100%;
  height: 100%;

  *:not(:first-child) {
    margin-top: 10px;
  }
`;

export const CardImage = styled.img`
  height: 300px;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

export const CardName = styled.div`
  font-weight: 400;
  font-size: 1.25rem;
`;

export const CardPrice = styled.div`
  font-size: 1.15rem;
  color: rgba(20, 20, 20, 0.85);
`;

export const CardDescription = styled.div`
  font-weight: 300;
  text-align: justify;
  text-indent: 50px;
`;

export const CardViewMore = styled.div`
  position: absolute;
  bottom: 0;
  font-weight: 300;
  font-size: 0.75rem;
  color: rgb(80, 199, 199);
  cursor: pointer;
`;

//MAIN RENDER
const Card = (props) => {
  //RETURN
  return (
    <CardContainer
      width={props.width}
      height={props.height}
      background={props.background}
    >
      <CardContent>
        <CardImage
          src={
            props.src
              ? props.src
              : "https://images.unsplash.com/photo-1502691876148-a84978e59af8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbG9yZnVsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
          }
          alt={props.alt ? props.alt : "Product"}
        />
        <CardName>{props.name ? props.name : "Product Name"}</CardName>
        <CardPrice>{props.price ? props.price : "$ 200"}</CardPrice>
        <CardDescription>
          {props.description ? props.description : "This is a description"}
        </CardDescription>
        <CardViewMore children={props.more ? props.more : "View more"} />
      </CardContent>
    </CardContainer>
  );
};

export default Card;
