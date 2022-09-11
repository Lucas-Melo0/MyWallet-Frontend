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
  svg {
    cursor: pointer;
  }
`;
const WalletOperations = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
const OperationsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
`;
const TopContainer = styled.div``;
const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  h6 {
    font-family: "Raleway", sans-serif;
    font-weight: 700;
    font-size: 17px;
    color: #000000;
  }
  p {
    font-family: "Raleway", sans-serif;
    font-size: 17px;
    color: #03ac00;
  }
`;
const LeftContainer = styled.div`
  display: flex;

  h5 {
    font-family: "Raleway", sans-serif;
    font-size: 16px;
    color: #c6c6c6;
  }
  p {
    cursor: pointer;
    margin-left: 10px;
    font-family: "Raleway", sans-serif;
    font-size: 16px;
    color: #000000;
  }
`;
const RightContainer = styled.div`
  display: flex;
  font-family: "Raleway", sans-serif;
  font-size: 16px;
  line-height: 19px;
  p {
    color: ${({ type }) => (type === "income" ? "#17c700" : "#c70000")};
  }

  h5 {
    cursor: pointer;
    margin-left: 5px;
    font-family: "Raleway", sans-serif;
    font-size: 16px;
    color: #c6c6c6;
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
  cursor: pointer;
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
  OperationsContainer,
  LeftContainer,
  RightContainer,
  TopContainer,
  BottomContainer,
};
