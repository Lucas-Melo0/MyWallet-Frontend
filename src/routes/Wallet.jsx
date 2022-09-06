import {
  EntrySquare,
  PageHeader,
  SquareContainer,
  WalletContainer,
  WalletOperations,
} from "../Components/containers/WalletContainer";
import { IoExitOutline } from "react-icons/io5";
import { BsPlusCircle } from "react-icons/bs";
const Wallet = () => {
  return (
    <>
      <WalletContainer>
        <PageHeader>
          <p> Olá, Fulano</p>
          <IoExitOutline color="#FFFFFF" size={"25px"} />
        </PageHeader>
        <WalletOperations>
          <h6>Não há registros de entrada ou saída</h6>
        </WalletOperations>
        <SquareContainer>
          <EntrySquare>
            <BsPlusCircle color="#FFFFFF" size={"25px"} />
            <p> Nova Entrada</p>
          </EntrySquare>
          <EntrySquare></EntrySquare>
        </SquareContainer>
      </WalletContainer>
    </>
  );
};

export { Wallet };
