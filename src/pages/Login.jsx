import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import "../styles/auth.css";

function Login() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (item) =>
        item.email === email &&
        item.password === password
    );

    if (user) {
      localStorage.setItem(
        "currentUser",
        JSON.stringify(user)
      );

      navigate("/dashboard");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1>Login</h1>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button onClick={handleLogin}>
          Login
        </button>

        <p>
          Don't have an account?
          <Link to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;