import { useState } from "react";

function Login({ setIsLogin, setIsLoggedIn }) {

  // Login states
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // Login function
  const handleLogin = () => {

    if (loginEmail === "" || loginPassword === "") {
      alert("Please fill all fields");
      return;
    }
    
    // Get user from LocalStorage
    const savedUser = JSON.parse(localStorage.getItem("user"));

    // Check if user exists
    if (!savedUser) {
      alert("No user found. Please signup first.");
      return;
    }

    // Check email
    if (savedUser.email !== loginEmail) {
      alert("Invalid Email");
      return;
    }

    // Check password
    if (savedUser.password !== loginPassword) {
      alert("Invalid password");
      return;
    }
   
    setIsLoggedIn(true);
    alert("Login Successful!");
  };

  return (
    <div>

      <h1>Login Page</h1>

      <label>Email</label>
      <input
        type="email"
        value={loginEmail}
        onChange={(e) => setLoginEmail(e.target.value)}
      />

      <label>Password</label>
      <input
        type="password"
        value={loginPassword}
        onChange={(e) => setLoginPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>

      <button onClick={() => setIsLogin(false)}>
        Create an Account
      </button>
    </div>
  );
}

export default Login;