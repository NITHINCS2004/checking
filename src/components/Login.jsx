import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const handleSuccess = (credentialResponse) => {
    const details = jwtDecode(credentialResponse.credential);
    console.log(details);
    localStorage.setItem("user", JSON.stringify(details));
    navigate("/pay"); // Redirect to Payment Page after login
  };

  return (
    <div className="login-container">
      <h1 className="login-heading">WELCOME TO YOUTUBE</h1>
      <GoogleOAuthProvider clientId="486340617177-627cq1s06j912ps9ot0lnrqube6b4vlp.apps.googleusercontent.com">
        <GoogleLogin onSuccess={handleSuccess} onError={() => console.log("Login Failed")} />
      </GoogleOAuthProvider>
    </div>
  );
};

export default Login;
