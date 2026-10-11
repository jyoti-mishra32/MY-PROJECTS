import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./CSS/LoginSignup.css";

const LoginSignup = () => {

  const { loginWithRedirect } = useAuth0();

  return (
    <div className="loginsignup">

      <div className="loginsignup-container">

        <h1>Sign Up</h1>

        <div className="loginsignup-fields">

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Email Address"
          />

          <input
            type="password"
            placeholder="Password"
          />

        </div>

        {/* Normal Login */}
        <button
          onClick={() => alert("Signup successful!")}
        >
          Login
        </button>

        <p className="loginsignup-login">
          Already have an account
          <span onClick={() => alert("Login clicked")}>
          </span>
        </p>

        <div className="loginsignup-agree">

          <input
            type="checkbox"
            name=""
            id=""
          />

          <p>
            By continuing, I agree to the terms of use & privacy policy.
          </p>

        </div>

        {/* Auth0 */}
        <div className="auth0-section">

          <div className="auth0-divider">
            <span>OR</span>
          </div>

          <button
            className="auth0-btn"
            onClick={() => loginWithRedirect()}
          >
            Continue with Auth0
          </button>

        </div>

      </div>

    </div>
  );
};

export default LoginSignup;