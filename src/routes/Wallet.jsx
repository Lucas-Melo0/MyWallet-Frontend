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
  const data = JSON.parse(localStorage.getItem("auth"));
  const { token, name } = data;
  const navigate = useNavigate();

  useEffect(() => {
    getOperations(token).then((value) => setOperations(value.data));
  }, []);

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

      if (transaction.operation === "expenses") {
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
      localStorage.removeItem("auth");
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
        setOperations(operations.filter((operation) => operation._id !== id));
      } catch (err) {
        console.log(err);
      }
    }
  };

  const editTransaction = (operation) => {
    const transaction = operation.operation;
    if (transaction === "income") {
      setPageType({ type: "editIncome", id: operation._id });
      navigate("/transacoes");
    }
    if (transaction === "expenses") {
      setPageType({ type: "editExpenses", id: operation._id });
      navigate("/transacoes");
    }
  };

  return (
    <>
      <WalletContainer>
        <PageHeader>
          <p> Ol??, {name}</p>
          <IoExitOutline onClick={logoutUser} color="#FFFFFF" size={"25px"} />
        </PageHeader>
        <WalletOperations>
          {operations.length === 0 && (
            <h6>N??o h?? registros de entrada ou sa??da</h6>
          )}
          <TopContainer>
            {operations.map((operation, index) => {
              return (
                <OperationsContainer key={index}>
                  <LeftContainer>
                    <h5> {operation.date}</h5>
                    <p onClick={() => editTransaction(operation)}>
                      {operation.description}
                    </p>
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
              setPageType({ type: "income" }), navigate("/transacoes");
            }}
          >
            <BiPlusCircle color="#FFFFFF" size={"28px"} />
            <p> Nova Entrada</p>
          </EntrySquare>
          <EntrySquare
            onClick={() => {
              setPageType({ type: "expenses" }), navigate("/transacoes");
            }}
          >
            <BiMinusCircle color="#FFFFFF" size={"28px"} />
            <p>Nova sa??da </p>
          </EntrySquare>
        </SquareContainer>
      </WalletContainer>
    </>
  );
};

export { Wallet };
