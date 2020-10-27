import axios from "axios";
import { REGISTER_SUCCESS, REGISTER_FAILURE } from "./types";
import { setAlert } from "./alert";

// Register patient(user)
export const registerPatient = ({ name, email, password }) => async (
  dispatch
) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ name, email, password });
  try {
    const res = await axios.post(
      "https://healthcounsel-api.herokuapp.com/signup",
      body,
      config
    );
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch(setAlert(error.response.data.message, "danger"));
    console.log(error.response.data.message);
    dispatch({
      type: REGISTER_FAILURE,
    });
  }
};
