import { useState } from "react";
const AuthComponent = () => {
  const [users, setUsers] = useState([
    { username: "user1", password: "password1" },
    { username: "user2", password: "password2" },
  ]);
  const [token, setToken] = useState("");
  const login = (username, password) => {
    const user = users.find(
      (user) => user.username === username && user.password === password,
    );
    if (user) {
      const token = username;
      setToken(token);
      localStorage.setItem("IsAuthenticatedToken", token);
    }
  };
  const logout = () => {
    setToken("");
    localStorage.removeItem("IsAuthenticatedToken");
  };
  const signup = (username, password) => {
    setUsers([...users, { username, password }]);
    login(username, password);
  };

  const isLoggedIn = () => {
    return localStorage.getItem("IsAuthenticatedToken") !== "";
  };
};
export default AuthComponent;
