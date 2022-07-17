import React from "react";

// netflix logo : https://upload.wikimedia.org/wikipedia/commons/thu…ix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png

// smiley logo :  https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png

function Navbar() {
  const [navTransp, setNavTransp] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setNavTransp(true);
      } else {
        setNavTransp(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`navbar ${navTransp && "nav_black"}`}>
      <img
        src="https://www.freepnglogos.com/uploads/netflix-logo-text-emblem-31.png"
        className="netflix--logo"
        alt="Netflix"
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        className="smiley--accnt"
        alt="Account"
      />
    </div>
  );
}

export default Navbar;
