import {
  BottomContainer,
  EntrySquare,
  LeftContainer,
  OperationsContainer,
  PageHeader,
  RightContainer,
  SquareContainer,
  TopContainer,
  WalletContainer,
  WalletOperations,
} from "../Components/containers/WalletContainer";
import { useEffect, useState } from "react";
import { IoExitOutline } from "react-icons/io5";
import { BiPlusCircle } from "react-icons/bi";
import { BiMinusCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import { getOperations } from "../API/axiosRequests";
const Wallet = ({ data }) => {
  const [operations, setOperations] = useState([]);
  const { token, name } = data;

  useEffect(() => {
    getOperations(token).then((value) => setOperations(value.data));
  }, []);

  const calculateResult = () => {
    let sum = 0;
    operations.forEach((operation) => {
      if (operation.operation === "income") sum += Number(operation.value);
      if (operation.operation === "outcome") sum -= Number(operation.value);
    });

    return sum;
  };

  return (
    <>
      <WalletContainer>
        <PageHeader>
          <p> Olá, {name}</p>
          <IoExitOutline color="#FFFFFF" size={"25px"} />
        </PageHeader>
        <WalletOperations>
          {/*  <h6>Não há registros de entrada ou saída</h6> */}
          <TopContainer>
            {operations.map((operation, index) => {
              return (
                <OperationsContainer key={index}>
                  <LeftContainer>
                    <h5> {operation.date}</h5>
                    <p> {operation.description}</p>
                  </LeftContainer>
                  <RightContainer type={operation.operation}>
                    <p> {operation.value}</p>
                  </RightContainer>
                </OperationsContainer>
              );
            })}
          </TopContainer>
          <BottomContainer>
            <h6>SALDO</h6>
            <p>{calculateResult()}</p>
          </BottomContainer>
        </WalletOperations>
        <SquareContainer>
          <EntrySquare>
            <Link to="/sessao/entrada">
              <BiPlusCircle color="#FFFFFF" size={"28px"} />
            </Link>
            <p> Nova Entrada</p>
          </EntrySquare>
          <EntrySquare>
            <Link to="/sessao/saida">
              <BiMinusCircle color="#FFFFFF" size={"28px"} />
            </Link>
            <p>Nova saída </p>
          </EntrySquare>
        </SquareContainer>
      </WalletContainer>
    </>
  );
};

export { Wallet };
