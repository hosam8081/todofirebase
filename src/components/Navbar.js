import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/AuthContext";
const Navbar = () => {
  const {isLogin, logOut } = useGlobalContext();
  return (
    <div className="shadow-3xl checked border text-white">
      <div className="container py-4">
        <div className="flex justify-between items-center flex-wrap">
          <Link className="text-2xl text-white font-extrabold" to="/">
            todo
          </Link>
          {!isLogin ? (
            <div>
              <Link className="text-2xl" to={"/login"}>
                login
              </Link>
              <Link className="pl-2 text-2xl" to={"/signup"}>
                sign
              </Link>
            </div>
          ) : (
            <div>
              <Link className="text-2xl" to={"/login"} onClick={() => logOut()}>
                logout
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
