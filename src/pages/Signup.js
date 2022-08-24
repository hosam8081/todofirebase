import React, { useState } from "react";
import heroImg from "../images/bg-desktop-light.jpg";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  console.log(password.length);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("password digites should be bigger than 6");
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
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
              value="signup"
            />
            {error && <div className="text-center text-white">{error}</div>}
            <div className="text-center text-white">
              a member?
              <Link to="/signup" className="text-primary">
                {" "}
                login now
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
