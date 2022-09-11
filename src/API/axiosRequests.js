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

const sendTransaction = (data, token, operation) => {
  return axiosBase.post(`/${operation}`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

const deleteSession = (token) => {
  return axiosBase.delete("/sign-in", {
    headers: { Authorization: `Bearer ${token}` },
  });
};

const deleteOperation = (id, token) => {
  return axiosBase.delete(`/transactions/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export {
  userSignUp,
  userSignIn,
  getOperations,
  sendTransaction,
  deleteSession,
  deleteOperation,
};
