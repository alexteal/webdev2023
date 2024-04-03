import React, { useState, useEffect } from "react";
import AuthComponent from "../Auth";

function Header() {
  const auth = AuthComponent();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const isAuthenticated = auth.isLoggedIn();
    setIsAuthenticated(isAuthenticated);
  }, [auth]);
  return (
    <div>
      {isAuthenticated ? <h1>Authenticated</h1> : <h1>Not authenticated</h1>}
    </div>
  );
}
export default Header;
