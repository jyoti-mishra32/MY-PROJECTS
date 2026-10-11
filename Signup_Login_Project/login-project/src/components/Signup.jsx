import { useState } from "react";

function Signup({ setIsLogin }) {

  // Signup states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Signup function
  const handleSignup = () => {

    // Check empty fields
    if (
      name === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      alert("Please fill all fields");
      return;
    }

    if (name.length < 3) {
      alert("Name must be at least 3 characters");
      return;
    }

    // Email validation
    if (!email.includes("@") || !email.includes(".")) {
      alert("Please enter a valid email");
      return;
    }

    // Password length validation
    if (password.length < 6 ) {
      alert("Password must be at least 6 characters");
      return;
    }
    
    // Check password
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Create user object
    const user = {
      name: name,
      email: email,
      password: password
    };

    // Save user in LocalStorage
    localStorage.setItem("user", JSON.stringify(user));

    alert("Signup Successful!");

    setIsLogin(true);
  };

  return (
    <div>

      <h1>Signup Page</h1>

      <label>Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <label>Confirm Password</label>
      <input
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <button onClick={handleSignup}>Signup</button>

      <button onClick={() => setIsLogin(true)}>
        Already have an account? Login
      </button>

    </div>
  );
}

export default Signup;