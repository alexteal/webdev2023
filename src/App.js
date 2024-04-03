import { useEffect, useState } from "react";
import { useAuth } from "./components/Auth";
import Login from "./components/Auth/LoginUI";
import Header from "./components/Header";

function App() {
  const auth = useAuth();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const isAuthenticated = auth.isLoggedIn();
    setIsAuthenticated(isAuthenticated);
  }, [auth]);
  return (
    <>
      <Header />
      {isAuthenticated ? <></> : <Login />}
    </>
  );
}

export default App;
