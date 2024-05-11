import React from "react";
import "./Login.css";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
export const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState("");
  const auth = getAuth();

  const navigate = useNavigate();

  const handleEmailInput = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordInput = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // setEmail(event.target.email.value);
    // setPassword(event.target.password.value);
    console.log(email, password);

    event.preventDefault();
    if (password !== "" && email !== "") {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          navigate("/Ai");
        })
        .catch((e) => {
          setError(e.message);
        });
    } else {
      setError("All fields are required");
    }
  };
  return (
    <div className="centre">
      <h1>LOGIN</h1>
      <div className="box"></div>
      <form method="post" onSubmit={handleSubmit}>
        <div className="txt_feild">
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleEmailInput}
            required
          />
          <span></span>
          <label>Email</label>
        </div>

        <div className="txt_feild">
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordInput}
            required
          />
          <span></span>
          <label>PASSWORD</label>
        </div>
        <div className="pass">FORGOT PASSWORD?</div>
        <input type="submit" value="login" />

        <div className="sign_up_link">
          Not a Member? <Link to="/reg">signup</Link>
        </div>
        <p className="text-red-600">{error}</p>
      </form>
    </div>
  );
};
