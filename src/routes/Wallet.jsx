import {
  EntrySquare,
  LeftContainer,
  OperationsContainer,
  PageHeader,
  RightContainer,
  SquareContainer,
  WalletContainer,
  WalletOperations,
} from "../Components/containers/WalletContainer";
import { useEffect } from "react";
import { IoExitOutline } from "react-icons/io5";
import { BiPlusCircle } from "react-icons/bi";
import { BiMinusCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import { getOperations } from "../API/axiosRequests";
const Wallet = ({ data }) => {
  const operations = [
    { user: "Lucas", date: "12/12", description: "Lanche", price: "25 R$" },
    { user: "Lucas", date: "12/12", description: "Lanche", price: "25 R$" },
    { user: "Lucas", date: "12/12", description: "Lanche", price: "25 R$" },
  ];
  const { token, name } = data;

  useEffect(() => {
    getOperations(token).then((value) => console.log(value));
  }, []);

  return (
    <>
      <WalletContainer>
        <PageHeader>
          <p> Olá, {name}</p>
          <IoExitOutline color="#FFFFFF" size={"25px"} />
        </PageHeader>
        <WalletOperations>
          {/*  <h6>Não há registros de entrada ou saída</h6> */}
          {operations.map((value, index) => {
            return (
              <OperationsContainer key={index}>
                <LeftContainer>
                  <h5> {value.date}</h5>
                  <p> {value.description}</p>
                </LeftContainer>
                <RightContainer>
                  <p> {value.price}</p>
                </RightContainer>
              </OperationsContainer>
            );
          })}
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
