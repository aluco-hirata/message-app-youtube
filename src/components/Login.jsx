import React from "react";
import "./Login.css";
import ChatIcon from "@material-ui/icons/Chat";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";



const Login = () => {
  const signIn = () => {
    auth.signInWithPopup(provider)
      .catch(err => alert(err.message))
  }
	return (
		<div className="login">
			<div className="login__logo">
        <ChatIcon variant="contained" style={{ fontSize: 80, color: "#3ea4fb"}} />
        <h1>Message App</h1>
      </div>
      
      <Button onClick={signIn}>Sign In</Button>
		</div>
	);
};

export default Login;
