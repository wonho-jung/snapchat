import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/appSlice";
import { auth, provider } from "../../firebase";
import "./Login.css";
function Login() {
  const dispatch = useDispatch();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((reuslt) => {
        dispatch(
          login({
            username: reuslt.user.displayName,
            profilePic: reuslt.user.photoURL,
            id: reuslt.user.uid,
          })
        );
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__container">
        <img src="https://cdn.worldvectorlogo.com/logos/snapchat-1.svg" />
        <Button variant="outlined" onClick={signIn}>
          Sign in
        </Button>
      </div>
    </div>
  );
}

export default Login;
