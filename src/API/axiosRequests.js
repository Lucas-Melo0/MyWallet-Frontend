import { axiosBase } from "./axiosBase";

const userSignUp = (data) => {
  return axiosBase.post("/signup", data);
};

export { userSignUp };
