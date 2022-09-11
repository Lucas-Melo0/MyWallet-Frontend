import { PurpleButton } from "../Components/buttons/PurpleButton";
import { ExpenseContainer } from "../Components/containers/ExpenseContainer";
import { CustomForm } from "../Components/form/CustomForm";
import { FormInput } from "../Components/form/FormInput";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendTransaction } from "../API/axiosRequests";
import { CurrencyInput } from "../Components/masks/CurrencyInput";

const Transactions = ({ pageType }) => {
  const navigate = useNavigate();
  const data = JSON.parse(localStorage.getItem("auth"));
  const { token } = data;
  const [form, setForm] = useState({ value: "", description: "" });
  const headerText = {
    income: "Entrada",
    expenses: "Saída",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      sendTransaction(form, token, pageType);
      navigate("/sessao");
    } catch (err) {
      console.log(err);
    }
  };

  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <ExpenseContainer>
        <h1>Nova {headerText[pageType]}</h1>
        <CustomForm onSubmit={handleSubmit}>
          <CurrencyInput
            id="input-currency"
            value={form.value}
            placeholder="Valor"
            onChange={handleForm}
            required
            name="value"
          ></CurrencyInput>
          <FormInput
            onChange={handleForm}
            placeholder="Descrição"
            required
            name="description"
          ></FormInput>
          <PurpleButton>Salvar {headerText[pageType]}</PurpleButton>
        </CustomForm>
      </ExpenseContainer>
    </>
  );
};
export { Transactions };
