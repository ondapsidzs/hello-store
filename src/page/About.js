import styled from "styled-components";

//STYLED_COMPONENTS
export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 100px 0;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;

  @media screen and (max-width: 980px) {
    flex-direction: column-reverse;
  }
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;

  > h1 {
    font-size: 4rem;
    line-height: 100%;
    margin-bottom: 30px;
  }

  > p {
    font-weight: 300;
    line-height: 175%;
    text-align: justify;
  }

  @media screen and (max-width: 980px) {
    width: 100%;
  }
`;

export const RightContent = styled.div`
  width: 30%;

  > img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

  @media screen and (max-width: 980px) {
    width: 100%;
    height: 200px;
    margin-bottom: 30px;
  }
`;

//MAIN_RENDER
const About = () => {
  //RETURN
  return (
    <Container>
      <Content>
        <LeftContent>
          <h1>About Us</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
            repudiandae sunt sequi modi, excepturi dolores iure, deserunt aut
            eveniet officia suscipit beatae nisi at sint. Sapiente tempora amet
            accusantium voluptatem. Sapiente cupiditate et reprehenderit minus
            sequi suscipit ea, consequuntur quibusdam, rem esse voluptatem sit,
            voluptas doloremque assumenda pariatur distinctio corrupti
            exercitationem illum nulla omnis. Incidunt aperiam distinctio culpa
            quae explicabo! Asperiores dolores hic assumenda soluta minima
            tenetur ad aspernatur iure rerum aut suscipit quia voluptatum,
            velit, omnis corporis ipsa animi quod impedit cumque veniam qui
            iusto? Veniam perspiciatis nesciunt voluptate. Provident ducimus
            molestiae impedit reprehenderit ipsam accusantium error magnam
            eligendi magni est esse nisi quo aliquam voluptatibus delectus,
            tempore quam nostrum? Asperiores, optio! Beatae hic rem minima
            repellat nihil. Ad? Voluptate ipsam eaque voluptatum aspernatur
            perspiciatis ut error eum mollitia vel inventore. Amet repellat ab,
            dolor quae fugit alias perferendis minus et similique id, ullam
            nostrum eveniet eaque dicta pariatur!
          </p>
        </LeftContent>
        <RightContent>
          <img
            src="https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fGNvbG9yZnVsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
            alt="about us"
          />
        </RightContent>
      </Content>
    </Container>
  );
};

export default About;
