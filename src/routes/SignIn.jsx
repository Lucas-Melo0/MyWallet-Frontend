import { Logo } from "../Components/Logo/Logo";
import {
  LoginContainer,
  RedirectLink,
} from "../Components/containers/LoginContainer";
import { PurpleButton } from "../Components/buttons/PurpleButton";
import { FormInput } from "../Components/form/FormInput";
import { CustomForm } from "../Components/form/CustomForm";
import { useState } from "react";
import { Link } from "react-router-dom";

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
            type="password"
            placeholder="Senha"
            name="password"
            onChange={handleForm}
          ></FormInput>
          <PurpleButton>Entrar</PurpleButton>
        </CustomForm>
        <Link to={"/cadastro"}>
          <RedirectLink>Primeira vez? Cadastre-se!</RedirectLink>
        </Link>
      </LoginContainer>
    </>
  );
};

export { SignIn };
