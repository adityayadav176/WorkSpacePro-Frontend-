import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import img from "../assest/image.png";
import "./Css/Login.css";

function Login() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      const json = await response.json();
      console.log(json);

      if (response.ok) {
        // optional: save token
        localStorage.setItem("token", json.authtoken);

        alert("Login Successful");

        // redirect to Home
        navigate("/Dashboard");
      } else {
        alert("Invalid Credentials");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Server not running or CORS issue");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="Login-page">
      <div className="Login-Container">
        <div className="Login-left">
          <img src={img} alt="login" />
        </div>

        <div className="Login-right">
          <h1>Login</h1>
          <p>
            Create A New Account
            <NavLink to="/Signup" className="login"> Sign Up</NavLink>
          </p>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="email"
              autoComplete="off"
              value={credentials.email}
              onChange={onChange}
              placeholder="Email address or phone number"
              required
            />

            <input
              type="password"
              name="password"
              minLength={8}
              autoComplete="off"
              value={credentials.password}
              onChange={onChange}
              placeholder="Enter Your Password"
              required
            />

            <button className="LogInBtn" type="submit">
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;