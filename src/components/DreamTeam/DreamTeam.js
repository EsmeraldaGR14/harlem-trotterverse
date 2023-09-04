import React, { useState, useEffect } from "react";
import { getAllTrottersAPI, getSingleTrotterAPI } from "../API/API";
import { useNavigate, useParams } from "react-router-dom";
import { getImagesForActivePlayers } from "../data/Images";

function DreamTeam() {
  let { id } = useParams();
  let navigate = useNavigate();

  const [userData, setUserData] = useState({});
  const [arrayOfActivePlayers, setArrayOfActivePlayers] = useState([]);
  const [dreamTeamArray, setDreamTeamArray] = useState([]);
  const [disabledPlayers, setDisabledPlayers] = useState([]);

  useEffect(() => {
    (async function fetchData() {
      try {
        const userResponse = await getSingleTrotterAPI(id);
        const activePlayersResponse = await getAllTrottersAPI();

        setUserData(userResponse.data);
        setArrayOfActivePlayers(activePlayersResponse.data);
      } catch (error) {
        console.log(error);
      }
    })();
    // fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function addToTheDreamTeam(playerInfo) {
    setDreamTeamArray((prevArray) => [...prevArray, playerInfo]);
    setDisabledPlayers((prevArray) =>
      prevArray.filter((id) => id !== playerInfo.id)
    );
  }

  function removeFromTheDreamTeam(playerInfo) {
    console.log("player info:", playerInfo);
    setDreamTeamArray((prevArray) =>
      prevArray.filter((player) => player.id !== playerInfo.id)
    );
    setDisabledPlayers((prevArray) =>
      prevArray.filter((id) => id !== playerInfo.id)
    );
  }
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1 }}>
        <div>
          <h2>{userData.nickname}</h2>
        </div>
      </div>
      <div style={{ flex: 3 }}>
        <div
          style={{ display: "flex", flexDirection: "column", height: "100%" }}
        >
          <div>
            <h3>Your Dream Team</h3>
            {dreamTeamArray &&
              dreamTeamArray.map((player) => (
                <div
                  key={player.nickname}
                  onClick={() => removeFromTheDreamTeam(player)}
                >
                  {player.nickname}
                </div>
              ))}
          </div>
          <div>
            <h3>Choose your Dream Team</h3>
            {arrayOfActivePlayers.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  if (!disabledPlayers.includes(item.id)) {
                    addToTheDreamTeam(item);
                  }
                }}
                className={`${
                  disabledPlayers.includes(item.id) ? "disabled" : ""
                }`}
              >
                {item.nickname}
                {console.log(getImagesForActivePlayers(item))}
                <img src={getImagesForActivePlayers(item)} alt=" " />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DreamTeam;
