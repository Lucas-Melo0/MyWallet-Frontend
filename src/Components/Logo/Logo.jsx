import styled from "styled-components";
const Logo = () => {
  return (
    <>
      <LogoText>My Wallet</LogoText>
    </>
  );
};

const LogoText = styled.h1`
  text-align: center;
  font-size: 32px;
  color: #ffffff;
  font-family: "Saira Stencil One", cursive;
`;

export { Logo };
