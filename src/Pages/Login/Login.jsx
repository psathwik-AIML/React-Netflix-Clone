import React from "react";
import "./Login.css";
import logo from "../../assets/logo.png";
import { useState } from "react";
import { signup, login } from "../../firebase";
import spinner from "../../assets/netflix_spinner.gif";
function Login() {
  // use state to switch form
  const [loginStatus, setLoginStatus] = useState("Login");
  const [loading, setLoading] = useState(false);
  // usestate to store inputs
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });
  // function to handle inputs
  async function handleInputs(e) {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  }
  // function to handle button
  async function handleButton(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const { username, password, email } = inputs;
      if (loginStatus === "Login") {
        await login(email, password);
      } else {
        await signup(username, email, password);
      }
      setInputs({ username: "", password: "", email: "" });
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  }
  return loading ? (
    <div className="spinner">
      <img src={spinner} alt="" />
    </div>
  ) : (
    <div className="login">
      <img src={logo} alt="" />
      {/* login form  */}
      <div className="login-form">
        <h2>{loginStatus === "Login" ? "Login" : "SignUp Now"}</h2>
        <form action="">
          {loginStatus !== "Login" ? (
            <input
              name="username"
              type="text"
              placeholder="Enter Username"
              value={inputs.username}
              onChange={handleInputs}
            />
          ) : (
            ""
          )}
          <input
            name="email"
            type="email"
            placeholder="Enter Email"
            value={inputs.email}
            onChange={handleInputs}
          />
          <input
            name="password"
            type="password"
            placeholder="Enter Password"
            value={inputs.password}
            onChange={handleInputs}
          />
          <button onClick={handleButton}>
            {loginStatus === "Login" ? "Login" : "Signup"}
          </button>
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
