import { axiosBase } from "./axiosBase";

const userSignUp = (data) => {
  return axiosBase.post("/sign-up", data);
};

const userSignIn = (data) => {
  return axiosBase.post("/sign-in", data);
};

const getOperations = (token) => {
  return axiosBase.get("/session", {
    headers: { Authorization: `Bearer ${token}` },
  });
};

const sendIncome = (data, token) => {
  return axiosBase.post("/income", data, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export { userSignUp, userSignIn, getOperations, sendIncome };
