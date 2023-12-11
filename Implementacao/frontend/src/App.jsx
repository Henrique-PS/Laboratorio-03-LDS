import { useEffect } from "react";
import "./App.css";
import AppRoutes from "./routes";
import { hasTokenInCookies } from "./utils/tokenVerify";
function App() {
    const currentRoute = location.pathname;
    const enabledRoutes = ["/", "/login", "/cadastro"];

    useEffect(() => {
      if (!enabledRoutes.includes(currentRoute.toLowerCase()) && !hasTokenInCookies(document)) return window.location.href = 'http://localhost:5173/'
    }, []);
  
  return (
      <AppRoutes />
  );
}

export default App;
