import React, { useState, useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
const AuthContext = React.createContext();
const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [isLogin, setIsLogin] = useState(user ? true : false);
  const [list, setList] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const logOut = () => {
    localStorage.removeItem("user");
    setIsLogin(false);
    window.location.reload()
  };
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    darkMode ? document.body.classList.add("bg-black-1") : document.body.classList.remove("bg-black-1")
  }, [darkMode]);

  return (
    <AuthContext.Provider
      value={{
        isLogin,
        setIsLogin,
        user,
        setUser,
        list,
        setList,
        logOut,
        darkMode,
        setDarkMode
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AuthContext);
};

export { AuthContext, AuthContextProvider };
