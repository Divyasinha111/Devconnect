import React from "react";
import ProfileCard from "../components/ProfileCard";
import "../styles/Profile.css";

const Profile = () => (
  <div className="profile-container">
    <h1 className="profile-title">My Profile</h1>
    <ProfileCard />
  </div>
);

export default Profile;
