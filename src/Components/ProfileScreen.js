import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectUser } from "../features/userSlice";
import { auth } from "../fireBase";
import Navbar from "./Navbar";

function ProfileScreen() {
  const user = useSelector(selectUser);

  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="profile_screen">
        <div className="title">
          <h1>Edit Profile</h1>
        </div>

        <div className="profile_body">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />

          <div className="profile_details">
            <h5 className="profile--email"> {user.email} </h5>
            <h5> {user.uid} </h5>
          </div>
        </div>

        <button
          onClick={() => {
            auth.signOut();
            navigate("/");
          }}
          className="profile--signout"
        >
          Sign out
        </button>
      </div>
    </>
  );
}

export default ProfileScreen;
