import React, { useState, useEffect } from "react";
import { handleOnChange } from "../helpers/OnChangeHandler";
import { getSingleTrotterAPI, updateTrotterPlayerAPI } from "../API/API";
import { useParams, useNavigate } from "react-router-dom";
import { skills } from "../data/Skills";
import "./EditTrotter.css";
function EditPlayer() {
  let { id } = useParams();
  let navigate = useNavigate();

  const [updatedData, setUpdatedData] = useState({
    skill: "",
    height: "",
    nickname: "",
    signature_move: "",
    lastname: "",
    jersey_number: 0,
    profile_picture: "",
  });

  useEffect(() => {
    (async function getSingleTrotter() {
      try {
        let { data } = await getSingleTrotterAPI(id);
        console.log(data);
        setUpdatedData(data);
      } catch (error) {}
    })();
  }, [id]);

  async function updateTrotterPlayer(e) {
    e.preventDefault();
    try {
      await updateTrotterPlayerAPI(id, updatedData);
      console.log("submitted");
      navigate(`/user-trotter/${id}`);
    } catch (error) {}
  }

  return (
    updatedData && (
      <div className="background">
        <div className="stars" />
        <div className="stars1" />
        <div className="stars2" />
        <div className="shooting-stars" />
        <form className="edit-body" onSubmit={updateTrotterPlayer}>
          <div className="option">
            <label className="label">Skill</label>
            <select
              type="text"
              id="position"
              name="position"
              onChange={(e) =>
                handleOnChange(
                  e.target.id,
                  e.target.value,
                  updatedData,
                  setUpdatedData
                )
              }
              value={updatedData.skill}
            >
              <option>Choose a skill..</option>
              {skills.map((skill, index) => (
                <option key={index + skill}>{skill}</option>
              ))}
            </select>
          </div>
          <div className="option">
            <label className="label">Height</label>
            <input
              type="text"
              id="height"
              name="height"
              onChange={(e) =>
                handleOnChange(
                  e.target.id,
                  e.target.value,
                  updatedData,
                  setUpdatedData
                )
              }
              value={updatedData.height}
            ></input>
          </div>
          <div className="option">
            <label className="label">Nickname</label>
            <input
              type="text"
              id="nickname"
              name="nickname"
              onChange={(e) =>
                handleOnChange(
                  e.target.id,
                  e.target.value,
                  updatedData,
                  setUpdatedData
                )
              }
              value={updatedData.nickname}
            ></input>
          </div>
          <div className="option">
            <label className="label">Signature Move</label>
            <input
              type="text"
              id="signature_move"
              name="signature_move"
              onChange={(e) =>
                handleOnChange(
                  e.target.id,
                  e.target.value,
                  updatedData,
                  setUpdatedData
                )
              }
              value={updatedData.signature_move}
            ></input>
          </div>
          <div className="option">
            <label className="label">Last name</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              onChange={(e) =>
                handleOnChange(
                  e.target.id,
                  e.target.value,
                  updatedData,
                  setUpdatedData
                )
              }
              value={updatedData.lastname}
            ></input>
          </div>
          <div className="option">
            <label className="label">Jersey Number</label>
            <input
              type="number"
              id="jersey_number"
              name="jersey_number"
              onChange={(e) =>
                handleOnChange(
                  e.target.id,
                  e.target.value,
                  updatedData,
                  setUpdatedData
                )
              }
              value={updatedData.jersey_number}
            ></input>
          </div>
          <div className="option">
            {updatedData.profile_picture ? (
              <>
                <label className="label">Profile Picture</label>
                <input
                  type="url"
                  id="profile_picture"
                  name="profile_picture"
                  onChange={(e) =>
                    handleOnChange(
                      e.target.id,
                      e.target.value,
                      updatedData,
                      setUpdatedData
                    )
                  }
                  value={updatedData.profile_picture}
                ></input>{" "}
              </>
            ) : (
              ""
            )}
          </div>
          <button className="submit-button">Submit</button>
        </form>
      </div>
    )
  );
}

export default EditPlayer;
