import { axiosBase } from "./axiosBase";

const userSignUp = (data) => {
  return axiosBase.post("/sign-up", data);
};

const userSignIn = (data) => {
  return axiosBase.post("/sign-in", data);
};

export { userSignUp, userSignIn };
