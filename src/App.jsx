import GlobalStyle from "./globalCss";
import { SignIn } from "./routes/SignIn";
import { SignUp } from "./routes/SignUp";
import { Wallet } from "./routes/Wallet";
import { Route, Routes } from "react-router-dom";
import { Transactions } from "./routes/Transactions";
import { useState } from "react";

function App() {
  const [pageType, setPageType] = useState({});

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/cadastro" element={<SignUp />} />
        <Route path="/sessao" element={<Wallet setPageType={setPageType} />} />
        <Route
          path="/transacoes"
          element={<Transactions pageType={pageType} />}
        />
      </Routes>
    </>
  );
}

export default App;
