import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";

// INTERNAL IMPORT
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // LOGIN WITH GOOGLE PROCESS
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Implement your login logic here
    console.log("Username:", username);
    console.log("Password:", password);
  };
  const { user, loginWithRedirect } = useAuth0();
  console.log(user);

  const handleFacebookLogin = () => {
    console.log("Facebook login");
  };

  return (
    <div className="container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2 className="title font-mono">Login Here</h2>
        {/* <input
          type="text"
          className="input-field"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          className="input-field"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="login-button">
          Login
        </button> */}
        <div className="social-login w-[200px] mt-10">
          <button
            type="button"
            className="google-login w-[100%]"
            onClick={() => loginWithRedirect()}
          >
            <FaGoogle className="-mb-5" />
            Login with Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
