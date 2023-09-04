import React, { useEffect, useState } from "react";
import { getAllTrottersAPI } from "../API/API";
import { useNavigate } from "react-router-dom";
import "./ActivePlayers.css";
import { getImagesForActivePlayers } from "../data/Images";

function AllTrotter() {
  let navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllTrotter();
  }, []);

  async function getAllTrotter() {
    try {
      let { data } = await getAllTrottersAPI();
      setData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  function goToPlayer(id) {
    navigate(`/trotters/${id}`);
  }

  return (
    <div className="background">
      <div className="container text">
        <div className="stars" />
        <div className="stars1" />
        <div className="stars2" />
        <div className="shooting-stars" />

        <div className="container mt-4">
          <div className="row">
            {data.map((player) => (
              <div
                key={player.id}
                className="col-md-4 mb-4"
                onClick={() => goToPlayer(player.id)}
              >
                <div className="card">
                  <img
                    src={getImagesForActivePlayers(player)}
                    className="card-img-top"
                    alt=""
                  />
                  <div className="card-body">
                    <h5 className="card-title">{player.nickname}</h5>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <strong>Jersey Number:</strong> {player.jersey_number}
                    </li>
                  </ul>
                  <div className="card-body">
                    <button
                      className="btn btn-primary"
                      onClick={() => goToPlayer(player.id)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllTrotter;
