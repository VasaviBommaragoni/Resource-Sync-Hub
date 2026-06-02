import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/auth.css";

function Register() {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [phone, setPhone] = useState("");

  const [password, setPassword] =
    useState("");

  const navigate = useNavigate();

  const handleRegister = () => {
    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    const newUser = {
      id: Date.now(),
      name,
      email,
      phone,
      password,
    };

    users.push(newUser);

    localStorage.setItem(
      "users",
      JSON.stringify(users)
    );

    alert("Registration Successful");

    navigate("/");
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1>Register</h1>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) =>
            setPhone(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button onClick={handleRegister}>
          Register
        </button>
      </div>
    </div>
  );
}

export default Register;