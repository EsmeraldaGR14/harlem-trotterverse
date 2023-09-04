import Axios from "../Axios/Axios";

async function getAllTrottersAPI() {
  try {
    let result = await Axios.get("/trotters");
    return result;
  } catch (error) {
    console.log(error);
  }
}

async function getSingleActivePlayerAPI(id) {
  try {
    let result = await Axios.get(`/trotters/${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
}
async function displayUserProfileAPI(data) {
  try {
    let result = await Axios.post(`/user-trotter`, data);
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
}

async function getSingleTrotterAPI(id) {
  try {
    let result = await Axios.get(`/user-trotter/${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
}

async function updateTrotterPlayerAPI(id, data) {
  try {
    await Axios.put(`/user-trotter/${id}`, data);
  } catch (error) {
    console.log(error);
  }
}

async function getAllUserTrotterAPI() {
  try {
    let result = await Axios.get(`/user-trotter`);
    return result;
  } catch (error) {
    console.log(error);
  }
}
async function deleteUserTrotterAPI(id) {
  try {
    await Axios.delete(`/user-trotter/${id}`);
  } catch (error) {
    console.log(error);
  }
}

export {
  getAllTrottersAPI,
  displayUserProfileAPI,
  getSingleTrotterAPI,
  updateTrotterPlayerAPI,
  getAllUserTrotterAPI,
  deleteUserTrotterAPI,
  getSingleActivePlayerAPI,
};
