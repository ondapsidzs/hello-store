import { useState, useRef } from "react";
import styled from "styled-components";

//STYLED-COMPONENTS
export const Content4Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2)),
    url("https://images.unsplash.com/photo-1596276122653-651a3898309f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80");
`;

export const Content4Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;

  div {
    margin-right: 100px;
    color: white;

    @media screen and (max-width: 980px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-right: 0;
      margin-bottom: 20px;
    }

    h2 {
      font-weight: 900;
      font-size: 4rem;
      text-transform: uppercase;
      line-height: 4rem;
    }
  }

  form {
    display: flex;
    flex-direction: column;

    input {
      font-family: "Poppins", sans-serif;
      font-size: 1.15rem;
      background: white;
      border: none;
      border-radius: 20px;
      text-align: center;
      padding: 0.5rem 2rem;
      margin-bottom: 20px;
    }

    button {
      font-family: "Poppins", sans-serif;
      background: white;
      border: 1px solid white;
      border-radius: 20px;
      padding: 0.5rem 1rem;
      cursor: pointer;
      transition: 0.2s all ease-in-out;
      transition-property: background, color, transform;

      &:hover {
        background: none;
        color: white;
        transform: translateY(-5px);
      }
    }
  }

  @media screen and (max-width: 980px) {
    flex-direction: column;
  }
`;

export const EmailNewsletterSubscribed = styled.div`
  position: fixed;
  top: ${(props) => (props.emailSubmitted ? "20%" : 0)};
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(266, 266, 266, 0.8);
  padding: 30px 200px;
  border-radius: 20px;
  opacity: ${(props) => (props.emailSubmitted ? 1 : 0)};
  transition: 0.5s all ease-in-out;
  z-index: 20;

  @media screen and (max-width: 980px) {
    width: 90%;
    text-align: center;
    padding: 20px 0;
  }
`;

//MAIN RENDER
const Content4 = () => {
  //LOGIC
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const emailDataRef = useRef();

  const sendEmailData = (event) => {
    event.preventDefault();

    const emailData = emailDataRef.current.value;

    emailNewsLetter(emailData);

    emailSubmittedSuccessfully();

    emailDataRef.current.value = "";
  };

  const emailNewsLetter = (emailData) => {
    fetch("https://email-bc0b0-default-rtdb.firebaseio.com/emails.json", {
      method: "POST",
      body: JSON.stringify(emailData),
      headers: { "Content-type": "application/json" },
    });
  };

  const emailSubmittedSuccessfully = () => {
    setEmailSubmitted(true);

    setTimeout(() => setEmailSubmitted(false), 2000);
  };

  //RETURN
  return (
    <Content4Container>
      <EmailNewsletterSubscribed emailSubmitted={emailSubmitted}>
        Hello! Email successfully submitted!
      </EmailNewsletterSubscribed>
      <Content4Content>
        <div>
          <h2>Helloo?!</h2>
          <p>Hello? Subscribe to our Newsletter!</p>
        </div>
        <form action="/" onSubmit={sendEmailData}>
          <input
            type="email"
            required
            placeholder="Enter your email here"
            ref={emailDataRef}
          />
          <button>Hello? Join Now</button>
        </form>
      </Content4Content>
    </Content4Container>
  );
};

export default Content4;
