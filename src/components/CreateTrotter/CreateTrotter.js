import React, { useState } from "react";
import "./CreateTrotter.css";
import { displayUserProfileAPI } from "../API/API";
import { useNavigate } from "react-router-dom";

const CreateTrotter = () => {
  let navigate = useNavigate();
  const [nickname, setNickname] = useState("");
  const [lastName, setLastName] = useState("");
  const [height, setHeight] = useState("");
  const [selectedSkill, setSelectedSkill] = useState("");
  const [signatureMove, setSignatureMove] = useState("");
  const [jerseyNumber, setJerseyNumber] = useState(0);
  const [profilePicture, setProfilePicture] = useState("");

  const skills = [
    "Dunking",
    "Three-Point Shooting",
    "Ball Handling",
    "Defense",
    "Passing",
    "Rebounding",
    "Post Moves",
    "Other",
  ];

  const handleNicknameChange = (event) => {
    setNickname(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };
  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };
  const handleJerseyNumberChange = (event) => {
    setJerseyNumber(event.target.value);
  };

  const handleSkillChange = (event) => {
    setSelectedSkill(event.target.value);
  };

  const handleSignatureMoveChange = (event) => {
    setSignatureMove(event.target.value);
  };

  const handleProfilePictureChange = (event) => {
    const url = event.target.value;
    setProfilePicture(url);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let userProfileDetails = {
      nickname: nickname,
      lastname: lastName,
      height: height,
      skill: selectedSkill,
      signature_move: signatureMove,
      profile_picture: profilePicture,
      jersey_number: jerseyNumber,
    };
    alert("You created a trotter!");
    navigate(`/user-trotter`);

    try {
      await displayUserProfileAPI(userProfileDetails);
    } catch (error) {
      console.log(error);
    }
  };

  return (

    <div className="background">
      <div className="container text">
        <div className="stars" />
        <div className="stars1" />
        <div className="stars2" />
        <div className="shooting-stars" />
    <div className="create-trotter-card">
      <div className="create-trotter-content">
        <h2>Create Your Trotter Profile</h2>
        <form onSubmit={handleSubmit}>
          <label className="centered">
            Upload Profile Picture:
            <input
              type="text"
              value={profilePicture}
              onChange={handleProfilePictureChange}
            />
          </label>
          <label>
            Nickname:
            <input
              type="text"
              value={nickname}
              onChange={handleNicknameChange}
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              value={lastName}
              onChange={handleLastNameChange}
            />
          </label>
          <label>
            Height:
            <input type="text" value={height} onChange={handleHeightChange} />
          </label>
          <label>
            Jersey Number:
            <input
              type="number"
              min="0"
              max="99"
              value={jerseyNumber}
              onChange={handleJerseyNumberChange}
            />
          </label>
          <p>Selected Jersey Number: {jerseyNumber}</p>
          <label>
            Select Basketball Skill:
            <select value={selectedSkill} onChange={handleSkillChange}>
              <option value="">Select...</option>
              {skills.map((skill, index) => (
                <option key={index} value={skill}>
                  {skill}
                </option>
              ))}
            </select>
          </label>
          <label>
            Signature Move:
            <input
              type="text"
              value={signatureMove}
              onChange={handleSignatureMoveChange}
            />
          </label>

          <button type="submit">Create Profile</button>
        </form>
      </div>
    </div>
  </div>
  </div>
  );
};

export default CreateTrotter;
