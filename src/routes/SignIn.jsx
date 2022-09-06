import { Logo } from "../Components/Logo/Logo";
import {
  LoginContainer,
  RedirectLink,
} from "../Components/containers/LoginContainer";
import { PurpleButton } from "../Components/buttons/PurpleButton";
import { FormInput } from "../Components/form/FormInput";
import { CustomForm } from "../Components/form/CustomForm";

const SignIn = () => {
  return (
    <>
      <LoginContainer>
        <Logo />
        <CustomForm>
          <FormInput placeholder="Email"></FormInput>
          <FormInput placeholder="Senha"></FormInput>
          <PurpleButton>Entrar</PurpleButton>
        </CustomForm>

        <RedirectLink>Primeira vez? Cadastre-se!</RedirectLink>
      </LoginContainer>
    </>
  );
};

export { SignIn };
