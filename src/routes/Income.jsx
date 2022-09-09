import { PurpleButton } from "../Components/buttons/PurpleButton";
import { ExpenseContainer } from "../Components/containers/ExpenseContainer";
import { CustomForm } from "../Components/form/CustomForm";
import { FormInput } from "../Components/form/FormInput";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendIncome } from "../API/axiosRequests";

const Income = ({ data }) => {
  const navigate = useNavigate();
  const { token } = data;
  const [form, setForm] = useState({ value: "", description: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      sendIncome(form, token);
      navigate("/sessao");
    } catch (err) {
      console.log(err);
    }
  };

  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  };

  return (
    <>
      <ExpenseContainer>
        <h1>Nova Entrada</h1>
        <CustomForm onSubmit={handleSubmit}>
          <FormInput
            type="number"
            placeholder="Valor"
            onChange={handleForm}
            required
            name="value"
          ></FormInput>
          <FormInput
            onChange={handleForm}
            placeholder="Descrição"
            required
            name="description"
          ></FormInput>
          <PurpleButton>Salvar Entrada</PurpleButton>
        </CustomForm>
      </ExpenseContainer>
    </>
  );
};
export { Income };
