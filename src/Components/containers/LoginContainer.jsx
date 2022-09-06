import styled from "styled-components";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 60vh;
  row-gap: 10px;
  width: 90%;
  margin: 0 auto;

  p {
    margin-top: 25px;
  }
`;
const RedirectLink = styled.p`
  text-align: center;
  font-size: 18px;
  color: #ffffff;
  font-family: "Raleway", sans-serif;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

export { LoginContainer, RedirectLink };
