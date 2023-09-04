import React, { useEffect, useState } from "react";
import { deleteUserTrotterAPI, getSingleTrotterAPI } from "../API/API";
import { useParams, useNavigate } from "react-router-dom";

function SingleUserTrotter() {
  let { id } = useParams();
  let navigate = useNavigate();

  const [data, setData] = useState({});

  useEffect(() => {
    (async function getSingleTrotter() {
      try {
        let { data } = await getSingleTrotterAPI(id);
        setData(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);

  function goBack() {
    navigate(-1);
  }

  function goToEditTrotter() {
    navigate(`/user-trotter/${id}/edit`);
  }

  function goToCreateYourDreamTeam() {
    navigate(`/user-trotter/${id}/dream-team`);
  }
  async function deleteUserTrotter() {
    try {
      await deleteUserTrotterAPI(id);
      alert(`You deleted ${data.nickname}`);
      navigate(`/user-trotter`);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    data && (
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">{`${data.nickname} ${data.lastname}`}</h2>
          <img className="card-img-bottom" src={data.profile_picture} alt="" />
          <p className="card-text">
            <strong>Signature Move: </strong>
            {data.signature_move}
          </p>
          <p>
            <strong>Jersey Number: </strong>
            {data.jersey_number}
          </p>
          <p className="card-text">
            <strong>Skill: </strong>
            {data.skill}
          </p>
          <div className="btn-group" role="group" aria-label="Button group">
            <button onClick={goBack} className="btn btn-secondary">
              BACK
            </button>
            <button onClick={goToEditTrotter} className="btn btn-primary">
              EDIT
            </button>
            <button onClick={deleteUserTrotter} className="btn btn-danger">
              DELETE
            </button>
            <button onClick={goToCreateYourDreamTeam}>
              CREATE YOUR DREAM TEAM
            </button>
          </div>
        </div>
      </div>
    )
  );
}

export default SingleUserTrotter;
