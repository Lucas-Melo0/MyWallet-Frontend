import { PurpleButton } from "../Components/buttons/PurpleButton";
import { ExpenseContainer } from "../Components/containers/ExpenseContainer";
import { CustomForm } from "../Components/form/CustomForm";
import { FormInput } from "../Components/form/FormInput";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { sendExpense } from "../API/axiosRequests";

const Outcome = ({ data }) => {
  const navigate = useNavigate();
  const { token } = data;
  const [form, setForm] = useState({ value: "", description: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      sendExpense(form, token);
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
        <h1>Nova saída</h1>
        <CustomForm onSubmit={handleSubmit}>
          <FormInput
            placeholder="Valor"
            required
            onChange={handleForm}
            type={"number"}
            name="value"
          ></FormInput>
          <FormInput
            placeholder="Descrição"
            required
            onChange={handleForm}
            name="description"
          ></FormInput>
          <PurpleButton>Salvar saída</PurpleButton>
        </CustomForm>
      </ExpenseContainer>
    </>
  );
};
export { Outcome };
