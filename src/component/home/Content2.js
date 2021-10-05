import styled from "styled-components";

//STYLED-COMPONENTS
export const Content2Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 100vw;
  padding: 100px 0;

  @media screen and (max-width: 980px) {
    padding: 50px 0;
  }
`;

export const Content2Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;

  h2 {
    font-family: "Poppins", sans-serif;
    font-family: 900;
    font-size: 3rem;
  }

  p {
    font-family: "Poppins", sans-serif;
    text-align: justify;
  }

  @media screen and (max-width: 980px) {
    flex-direction: column-reverse;
    width: 90%;
  }
`;

export const Content2Image = styled.img`
  height: 400px;
  width: 300px;
  margin-left: 50px;
  object-fit: cover;
  object-position: center;

  @media screen and (max-width: 980px) {
    height: 200px;
    width: 100%;
    margin-left: 0;
    margin-bottom: 50px;
  }
`;

//MAIN RENDER
const Content2 = () => {
  //RETURN
  return (
    <Content2Container>
      <Content2Content>
        <div>
          <h2>Hello?</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
            suscipit ea omnis. Sunt, illo quam! Ullam et quasi esse numquam
            voluptatibus, fuga quidem repudiandae cupiditate sed aliquid
            architecto itaque.
            <br />
            <br />
            Perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Ab earum adipisci quo porro, vero minus maiores harum
            doloribus aliquid recusandae incidunt autem? Ea nulla quam dolorem
            pariatur tempora nam mollitia?
          </p>
        </div>
        <Content2Image src="https://images.unsplash.com/photo-1433888104365-77d8043c9615?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y29sb3JmdWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" />
      </Content2Content>
    </Content2Container>
  );
};

export default Content2;
