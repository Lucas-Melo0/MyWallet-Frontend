import { Logo } from "../Components/Logo/Logo";
import {
  LoginContainer,
  RedirectLink,
} from "../Components/containers/LoginContainer";
import { PurpleButton } from "../Components/buttons/PurpleButton";
import { FormInput } from "../Components/form/FormInput";
import { CustomForm } from "../Components/form/CustomForm";
import { useState } from "react";

const SignIn = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleForm = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <LoginContainer>
        <Logo />
        <CustomForm onSubmit={handleSubmit}>
          <FormInput
            placeholder="Email"
            name="email"
            onChange={handleForm}
          ></FormInput>
          <FormInput
            placeholder="Senha"
            name="password"
            onChange={handleForm}
          ></FormInput>
          <PurpleButton>Entrar</PurpleButton>
        </CustomForm>

        <RedirectLink>Primeira vez? Cadastre-se!</RedirectLink>
      </LoginContainer>
    </>
  );
};

export { SignIn };
