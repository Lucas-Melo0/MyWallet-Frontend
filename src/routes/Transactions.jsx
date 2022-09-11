import { PurpleButton } from "../Components/buttons/PurpleButton";
import { ExpenseContainer } from "../Components/containers/ExpenseContainer";
import { CustomForm } from "../Components/form/CustomForm";
import { FormInput } from "../Components/form/FormInput";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { editOperation, sendTransaction } from "../API/axiosRequests";
import { CurrencyInput } from "../Components/masks/CurrencyInput";

const Transactions = ({ pageType }) => {
  const navigate = useNavigate();
  const data = JSON.parse(localStorage.getItem("auth"));
  const { token } = data;
  const { type, id } = pageType;
  const [form, setForm] = useState({ value: "", description: "" });
  const headerText = {
    income: "Nova entrada",
    expenses: "Nova saída",
    editIncome: "Editar entrada",
    editExpenses: "Editar saída",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (type === "income" || type === "expenses") {
        await sendTransaction(form, token, type);
      }
      if (type === "editIncome" || type === "editExpenses") {
        await editOperation(form, id, token);
      }
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
        <h1> {headerText[type]}</h1>
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
          <PurpleButton>{headerText[type]}</PurpleButton>
        </CustomForm>
      </ExpenseContainer>
    </>
  );
};
export { Transactions };
