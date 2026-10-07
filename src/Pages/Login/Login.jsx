import React from "react";
import "./Login.css";
import logo from "../../assets/logo.png";
import { useState } from "react";
function Login() {
  // use state to switch form
  const [loginStatus, setLoginStatus] = useState("Login");
  return (
    <div className="login">
      <img src={logo} alt="" />
      {/* login form  */}
      <div className="login-form">
        <h2>{loginStatus === "Login" ? "Login" : "SignUp Now"}</h2>
        <form action="">
          {loginStatus !== "Login" ? (
            <input type="text" placeholder="Enter Username" />
          ) : (
            ""
          )}
          <input type="email" placeholder="Enter Email" />
          <input type="password" placeholder="Enter Password" />
          <button>{loginStatus === "Login" ? "Login" : "Signup"}</button>
        </form>
        <div className="helper">
          <div className="remember">
            <input type="checkbox" />
            <p>remember me</p>
          </div>
          <p id="help">help Me ?</p>
        </div>
        <div className="form-switch">
          {loginStatus !== "Login" ? (
            <p>
              Already Have Account ?{" "}
              <span onClick={() => setLoginStatus("Login")}>Login</span>
            </p>
          ) : (
            <p>
              New to Netflix ?{" "}
              <span onClick={() => setLoginStatus("Signup")}>Signup</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
