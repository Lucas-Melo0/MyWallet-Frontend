import { PurpleButton } from "../Components/buttons/PurpleButton";
import {
  LoginContainer,
  RedirectLink,
} from "../Components/containers/LoginContainer";
import { CustomForm } from "../Components/form/CustomForm";
import { FormInput } from "../Components/form/FormInput";
import { Logo } from "../Components/Logo/Logo";

const SignUp = () => {
  return (
    <>
      <LoginContainer>
        <Logo />
        <CustomForm>
          <FormInput name="name" placeholder="Nome"></FormInput>
          <FormInput name="email" placeholder="Email"></FormInput>
          <FormInput
            type="password"
            name="password"
            placeholder="Senha"
          ></FormInput>
          <FormInput
            type="password"
            name="confirmation"
            placeholder="Confirme a senha"
          ></FormInput>
          <PurpleButton>Cadastrar</PurpleButton>
        </CustomForm>
        <RedirectLink>Já tem uma conta? Entre agora!</RedirectLink>
      </LoginContainer>
    </>
  );
};

export { SignUp };
