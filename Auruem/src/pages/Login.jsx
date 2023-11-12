import React, { useState } from "react";
import "./Login.css";

const LoginForm = ({ onToggle }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Implement your login logic here
    console.log("Logging in with:", username, password);
  };

  return (
    <div className="card-container">
      <h2>Login</h2>
      <form>
        <input
          type="text"
          value={username}
          placeholder=" Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="password"
          value={password}
          placeholder=" Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="button" className="button" onClick={handleLogin}>
          Login
        </button>
      </form>
      <p>
        Don't have an account?{" "}
        <span onClick={onToggle} className="clickable">
          Create Here
        </span>
      </p>
    </div>
  );
};

const RegisterForm = ({ onToggle }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    // Implement your registration logic here
    console.log("Registering with:", username, password);
  };

  return (
    <div className="card-container">
      <h2>Register</h2>
      <form>
        <input
          type="text"
          value={username}
          placeholder=" Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="password"
          value={password}
          placeholder=" Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="button" className="button" onClick={handleRegister}>
          Register
        </button>
      </form>
      <p>
        Already have an account?{" "}
        <span onClick={onToggle} className="clickable">
          Login Here
        </span>
      </p>
    </div>
  );
};

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleToggle = () => {
    setIsLogin((prevIsLogin) => !prevIsLogin);
  };

  return (
    <div className="page-container">
      {isLogin ? (
        <LoginForm onToggle={handleToggle} />
      ) : (
        <RegisterForm onToggle={handleToggle} />
      )}
    </div>
  );
};

export default AuthPage;
