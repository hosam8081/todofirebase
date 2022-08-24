import React, { useState } from "react";
import heroImg from "../images/bg-desktop-light.jpg";
import { addDoc, setDoc, collection, doc } from "firebase/firestore";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/AuthContext";
import Navbar from "../components/Navbar";

const Login = () => {
  const [error, serError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setIsLogin, setUser } = useGlobalContext();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        setIsLogin(true);
        setUser(user);
        navigate("/");
      })
      .catch((error) => {
        serError(true);
      });
  };
  return (
    <>
    <Navbar />
      <div className="relative">
        <div className="h-[300px] w-full">
          <img src={heroImg} alt="heroimg" className="w-full h-full" />
        </div>
        <div className="container absolute  py-24 top-0 left-1/2 -translate-x-1/2">
          <form onSubmit={(e) => handleLogin(e)}>
            <div>
              <input
                type="email"
                className="border border-gray-4 px-2  mb-3 py-2 w-full"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                type="password"
                className="border border-gray-4 px-2  mb-3 py-2 w-full"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <input
              type="submit"
              className="border border-gray-4 px-2  mb-3 py-2 w-full cursor-pointer"
              value="Login"
            />
            {error && "infaild email or password"}
            <div className="text-center text-white">
              not a member? 
              <Link to='/signup' className="text-primary">
                {" "}
                register now
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
