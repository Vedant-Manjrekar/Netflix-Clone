import React from "react";
import { auth } from "../fireBase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

function SignUpScreen() {
  const emailRef = React.useRef(null);
  const passwordRef = React.useRef(null);

  const register = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="signup--box">
      <form>
        <h1>Sign In</h1>
        <input
          ref={emailRef}
          className="inp"
          placeholder="Email"
          type="email"
          name=""
          id="email"
        />
        <input
          ref={passwordRef}
          className="inp"
          type="password"
          placeholder="Password"
          name=""
          id="password"
        />
        <input
          className="inp"
          type="submit"
          value="Sign In"
          onClick={signIn}
          id="btn"
        />
        <div className="extra--info">
          <input type="checkbox" value="Remember me" id="chk--box" />
          Remember me
          <p>Need Help?</p>
        </div>

        <div className="registration">
          <span>New to Netflix?</span>
          <span className="signup--now" onClick={register}>
            Sign up now.
          </span>
        </div>
      </form>
    </div>
  );
}

export default SignUpScreen;
