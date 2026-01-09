import WebRouter from "./router/WebRouter";
import { BigFiveProvider } from "./context/BigFiveProvider";
function App() {
  return (
      <BigFiveProvider>
        <WebRouter />
      </BigFiveProvider>
  );
}

export default App;
