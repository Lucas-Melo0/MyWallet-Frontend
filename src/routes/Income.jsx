import { PurpleButton } from "../Components/buttons/PurpleButton";
import { ExpenseContainer } from "../Components/containers/ExpenseContainer";
import { CustomForm } from "../Components/form/CustomForm";
import { FormInput } from "../Components/form/FormInput";

const Income = () => {
  return (
    <>
      <ExpenseContainer>
        <h1>Nova Entrada</h1>
        <CustomForm>
          <FormInput placeholder="Valor" name="value"></FormInput>
          <FormInput placeholder="Descrição" name="description"></FormInput>
          <PurpleButton>Salvar Entrada</PurpleButton>
        </CustomForm>
      </ExpenseContainer>
    </>
  );
};
export { Income };
