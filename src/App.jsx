import GlobalStyle from "./globalCss";
import { SignIn } from "./routes/SignIn";
import { SignUp } from "./routes/SignUp";
function App() {
  return (
    <>
      <GlobalStyle />
      <SignUp />
    </>
  );
}

export default App;
