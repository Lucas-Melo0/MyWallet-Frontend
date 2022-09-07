import GlobalStyle from "./globalCss";
import { SignIn } from "./routes/SignIn";
import { SignUp } from "./routes/SignUp";
import { Wallet } from "./routes/Wallet";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/cadastro" element={<SignUp />} />
        <Route path="/sessao" element={<Wallet />} />
      </Routes>

      <Wallet />
    </>
  );
}

export default App;
