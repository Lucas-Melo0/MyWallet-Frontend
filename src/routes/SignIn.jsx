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
  console.log(data);
  const handleForm = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await userSignIn(userData);
      setData(response.data);
      navigate("/sessao", { state: { data: response.data } });
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
