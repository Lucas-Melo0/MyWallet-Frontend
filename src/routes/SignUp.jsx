import { useState } from "react";
import { Link } from "react-router-dom";
import { userSignUp } from "../API/axiosRequests";
import { useNavigate } from "react-router-dom";
import { PurpleButton } from "../Components/buttons/PurpleButton";
import {
  LoginContainer,
  RedirectLink,
} from "../Components/containers/LoginContainer";
import { CustomForm } from "../Components/form/CustomForm";
import { FormInput } from "../Components/form/FormInput";
import { Logo } from "../Components/Logo/Logo";

const SignUp = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmation: "",
  });
  const navigate = useNavigate();
  const handleForm = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userSignUp(userData);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <LoginContainer>
        <Logo />
        <CustomForm onSubmit={handleSubmit}>
          <FormInput
            name="name"
            onChange={handleForm}
            placeholder="Nome"
          ></FormInput>
          <FormInput
            name="email"
            onChange={handleForm}
            placeholder="Email"
          ></FormInput>
          <FormInput
            type="password"
            name="password"
            onChange={handleForm}
            placeholder="Senha"
          ></FormInput>
          <FormInput
            type="password"
            name="confirmation"
            onChange={handleForm}
            placeholder="Confirme a senha"
          ></FormInput>
          <PurpleButton>Cadastrar</PurpleButton>
        </CustomForm>
        <Link to={"/"}>
          <RedirectLink>Já tem uma conta? Entre agora!</RedirectLink>
        </Link>
      </LoginContainer>
    </>
  );
};

export { SignUp };
