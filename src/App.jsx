import WebRouter from "./router/WebRouter";
import { BigFiveProvider } from "./context/BigFiveProvider";
import { HelmetProvider } from "react-helmet-async";
function App() {
  return (
    <HelmetProvider>
      <BigFiveProvider>
        <WebRouter />
      </BigFiveProvider>
    </HelmetProvider>
  );
}

export default App;
