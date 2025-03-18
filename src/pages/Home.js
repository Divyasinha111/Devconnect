import React from "react";
import ProfileCard from "../components/ProfileCard";
import "../styles/Home.css";

const Home = () => {
  const developers = [
    { name: "Alice", techStack: "React, Node.js" },
    { name: "Bob", techStack: "Python, Django" },
  ];

  return (
    <div className="home-container">
      <h1 className="home-title">Developer Feed</h1>
      <div className="profile-list">
        {developers.map((dev, index) => (
          <ProfileCard key={index} name={dev.name} techStack={dev.techStack} />
        ))}
      </div>
    </div>
  );
};

export default Home;
