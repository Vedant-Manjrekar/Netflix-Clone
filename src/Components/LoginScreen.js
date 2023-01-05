import React from "react";
import Footer from "./Footer";
import SignUpScreen from "./SignUpScreen";

function LoginScreen(props) {
  const [signIn, setSignIn] = React.useState(false);

  return (
    <>
      <div className="login">
        <nav className="nav">
          <img
            src="https://www.freepnglogos.com/uploads/netflix-logo-text-emblem-31.png"
            className="netflix--logo"
            alt="Netflix"
          />

          <button onClick={() => setSignIn(true)} className="sgnin">
            {" "}
            Sign In{" "}
          </button>
        </nav>

        <div className="login--background">
          {signIn || props.isSign ? (
            <div className="signup">
              <SignUpScreen />
            </div>
          ) : (
            <div className="login--body">
              <h1>Unlimited movies, TV shows and more.</h1>
              <p className="p1">Watch anywhere. Cancel anytime.</p>
              <p className="p2">
                Ready to watch? Enter your email to create or restart your
                membership.
              </p>

              <div className="email--box">
                <input
                  type="email"
                  name=""
                  placeholder="Email Address"
                  id="email--login"
                />
                <button onClick={() => setSignIn(true)}> Get Started </button>
              </div>
            </div>
          )}

          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/1ef84595-1fdb-4404-adac-15215ceeb3ae/7645af9d-2679-4f54-b57d-3a6b5c670e14/IN-en-20220711-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            alt=""
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default LoginScreen;
