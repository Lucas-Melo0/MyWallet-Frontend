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
import { useNavigate } from "react-router-dom";
import {
  deleteSession,
  getOperations,
  deleteOperation,
} from "../API/axiosRequests";

const Wallet = ({ setPageType }) => {
  const [operations, setOperations] = useState([]);
  const [render, setRender] = useState(false);
  const data = JSON.parse(localStorage.getItem("auth"));
  const { token, name } = data;
  const navigate = useNavigate();

  useEffect(() => {
    getOperations(token).then((value) => setOperations(value.data));
  }, [render]);

  const calculateResult = () => {
    let sum = 0;
    operations.forEach((transaction) => {
      if (transaction.operation === "income") {
        sum += Number(
          transaction.value
            .replace("R$", "")
            .replaceAll(".", "")
            .replace(",", ".")
        );
      }

      if (transaction.operation === "outcome") {
        sum -= Number(
          transaction.value
            .replace("R$", "")
            .replaceAll(".", "")
            .replace(",", ".")
        );
      }
    });
    return sum;
  };

  const logoutUser = async () => {
    try {
      await deleteSession(token);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const deleteTransaction = async (id) => {
    const wantsToDelete = window.confirm("Deseja realmente deletar esse item?");
    if (wantsToDelete) {
      try {
        await deleteOperation(id, token);
        setRender(!render);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      <WalletContainer>
        <PageHeader>
          <p> Olá, {name}</p>
          <IoExitOutline onClick={logoutUser} color="#FFFFFF" size={"25px"} />
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
                    <h5 onClick={() => deleteTransaction(operation._id)}>x</h5>
                  </RightContainer>
                </OperationsContainer>
              );
            })}
          </TopContainer>
          <BottomContainer>
            <h6>SALDO</h6>
            <p>{`R$ ${calculateResult()}`}</p>
          </BottomContainer>
        </WalletOperations>
        <SquareContainer>
          <EntrySquare
            onClick={() => {
              setPageType("income"), navigate("/transacoes");
            }}
          >
            <BiPlusCircle color="#FFFFFF" size={"28px"} />
            <p> Nova Entrada</p>
          </EntrySquare>
          <EntrySquare
            onClick={() => {
              setPageType("expenses"), navigate("/transacoes");
            }}
          >
            <BiMinusCircle color="#FFFFFF" size={"28px"} />
            <p>Nova saída </p>
          </EntrySquare>
        </SquareContainer>
      </WalletContainer>
    </>
  );
};

export { Wallet };
