import { Logo } from "../Components/Logo/Logo";
import {
  LoginContainer,
  RedirectLink,
} from "../Components/containers/LoginContainer";
import { PurpleButton } from "../Components/buttons/PurpleButton";
import { FormInput } from "../Components/form/FormInput";
import { useNavigate, Link } from "react-router-dom";
import { CustomForm } from "../Components/form/CustomForm";
import { useState } from "react";
import { userSignIn } from "../API/axiosRequests";

const SignIn = ({ setData, data }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleForm = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await userSignIn(userData);
      localStorage.setItem(
        "auth",
        JSON.stringify({ token: response.data.token, name: response.data.name })
      );
      setData(response.data);
      navigate("/sessao");
    } catch (err) {
      const { status } = err.response;
      if (status === 404) alert("Email ou senha incorretos!");
      console.log(err);
    }
  };
  return (
    <>
      <LoginContainer>
        <Logo />
        <CustomForm onSubmit={handleSubmit}>
          <FormInput
            type={"email"}
            required
            placeholder="Email"
            name="email"
            onChange={handleForm}
          ></FormInput>
          <FormInput
            required
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
