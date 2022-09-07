import GlobalStyle from "./globalCss";
import { SignIn } from "./routes/SignIn";
import { SignUp } from "./routes/SignUp";
import { Wallet } from "./routes/Wallet";
import { Route, Routes } from "react-router-dom";
import { Income } from "./routes/Income";
import { Outcome } from "./routes/Outcome";
function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/cadastro" element={<SignUp />} />
        <Route path="/sessao" element={<Wallet />} />
        <Route path="/sessao/entrada" element={<Income />} />
        <Route path="/sessao/saida" element={<Outcome />} />
      </Routes>
    </>
  );
}

export default App;
