import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import ContextProvider from "./context/index";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;