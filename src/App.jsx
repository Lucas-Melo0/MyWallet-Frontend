import GlobalStyle from "./globalCss";
import { SignIn } from "./routes/SignIn";
import { SignUp } from "./routes/SignUp";
import { Wallet } from "./routes/Wallet";
import { Route, Routes } from "react-router-dom";
import { Income } from "./routes/Income";
import { useState } from "react";
import { Outcome } from "./routes/Outcome";

function App() {
  const [data, setData] = useState({ token: "", name: "" });

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<SignIn setData={setData} data={data} />} />
        <Route path="/cadastro" element={<SignUp />} />
        <Route
          path="/sessao"
          element={<Wallet setData={setData} data={data} />}
        />
        <Route path="/sessao/entrada" element={<Income data={data} />} />
        <Route path="/sessao/saida" element={<Outcome data={data} />} />
      </Routes>
    </>
  );
}

export default App;
