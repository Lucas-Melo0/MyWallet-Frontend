import GlobalStyle from "./globalCss";
import { SignIn } from "./routes/SignIn";
import { SignUp } from "./routes/SignUp";
import { Wallet } from "./routes/Wallet";
function App() {
  return (
    <>
      <GlobalStyle />
      <Wallet />
    </>
  );
}

export default App;
