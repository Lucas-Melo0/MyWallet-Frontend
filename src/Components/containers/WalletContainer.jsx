import styled from "styled-components";

const WalletContainer = styled.div`
  display: flex;
  width: 90vw;
  margin: 0 auto;
  flex-direction: column;
  row-gap: 15px;
`;

const PageHeader = styled.div`
  margin-top: 20px;
  height: 5vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    font-family: "Raleway";
    font-weight: 700;
    font-size: 26px;
    color: #ffffff;
  }
`;
const WalletOperations = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 5px;
  width: 100%;
  height: 66vh;
  h6 {
    font-family: "Raleway", sans-serif;
    font-size: 20px;
    text-align: center;
    margin: auto 0;
    color: #868686;
  }
`;
const SquareContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
const EntrySquare = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  width: 46%;
  height: 20vh;
  background: #a328d6;
  border-radius: 5px;
  p {
    width: 80px;
    font-family: "Raleway", sans-serif;
    font-weight: 700;
    font-size: 17px;
    color: #ffffff;
  }
`;

export {
  WalletContainer,
  PageHeader,
  WalletOperations,
  EntrySquare,
  SquareContainer,
};
