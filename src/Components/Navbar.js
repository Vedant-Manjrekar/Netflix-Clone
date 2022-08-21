import React from "react";
import { useNavigate } from "react-router-dom";

// netflix logo : https://upload.wikimedia.org/wikipedia/commons/thu…ix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png

// smiley logo :  https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png

function Navbar(props) {
  const [navTransp, setNavTransp] = React.useState(false);

  const navigate = useNavigate();

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setNavTransp(true);
      } else {
        setNavTransp(false);
      }
    });
  }, []);

  return (
    <div className={`navbar ${navTransp && "nav_black"}`}>
      <img
        onClick={() => navigate("/")}
        src="https://www.freepnglogos.com/uploads/netflix-logo-text-emblem-31.png"
        className="netflix--logo"
        alt="Netflix"
      />

      <img
        onClick={() => {
          navigate("/profile");
        }}
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        className="smiley--accnt"
        alt="Account"
      />
    </div>
  );
}

export default Navbar;
