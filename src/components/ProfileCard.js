import React, { useState } from "react";
import "../styles/ProfileCard.css";

const ProfileCard = () => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [location, setLocation] = useState("");
  const [github, setGithub] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [techStack, setTechStack] = useState("");

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-card">
      <div className="profile-picture">
        {image ? <img src={image} alt="Profile" /> : <div className="placeholder">Upload Photo</div>}
        <input type="file" accept="image/*" onChange={handleImageUpload} />
      </div>
      <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
      <textarea placeholder="Enter your bio" value={bio} onChange={(e) => setBio(e.target.value)} />
      <input type="text" placeholder="Enter your location" value={location} onChange={(e) => setLocation(e.target.value)} />
      <input type="text" placeholder="GitHub URL" value={github} onChange={(e) => setGithub(e.target.value)} />
      <input type="text" placeholder="LinkedIn URL" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} />
      <input type="text" placeholder="Portfolio URL" value={portfolio} onChange={(e) => setPortfolio(e.target.value)} />
      <input type="text" placeholder="Enter tech stack (comma-separated)" value={techStack} onChange={(e) => setTechStack(e.target.value)} />
      <div className="profile-preview">
        <h2 className="profile-name">{name}</h2>
        <p className="profile-bio">{bio}</p>
        <p className="profile-location">Location: {location}</p>
        <div className="profile-links">
          {github && <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>}
          {linkedin && <a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>}
          {portfolio && <a href={portfolio} target="_blank" rel="noopener noreferrer">Portfolio</a>}
        </div>
        <div className="profile-tech">
          {techStack.split(",").map((tech, index) => (
            <span key={index} className="tech-badge">{tech.trim()}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;