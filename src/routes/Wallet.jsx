import {
  EntrySquare,
  PageHeader,
  SquareContainer,
  WalletContainer,
  WalletOperations,
} from "../Components/containers/WalletContainer";
import { IoExitOutline } from "react-icons/io5";
import { BiPlusCircle } from "react-icons/bi";
import { BiMinusCircle } from "react-icons/bi";
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
            <BiPlusCircle color="#FFFFFF" size={"28px"} />
            <p> Nova Entrada</p>
          </EntrySquare>
          <EntrySquare>
            <BiMinusCircle color="#FFFFFF" size={"28px"} />
            <p>Nova saída </p>
          </EntrySquare>
        </SquareContainer>
      </WalletContainer>
    </>
  );
};

export { Wallet };
