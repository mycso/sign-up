import Axios from "axios";
import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL
} from "../constants/userConstants";

export const register = (
  dogName,
  age,
  ageStage,
  dogWeight,
  physique,
  exercise
) => async (dispatch) => {
  dispatch({
    type: USER_REGISTER_REQUEST,
    payload: { dogName, age, ageStage, dogWeight, physique, exercise }
  });
  try {
    const { data } = await Axios.post("/api/users/register", {
      dogName,
      age,
      ageStage,
      dogWeight,
      physique,
      exercise
    });
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};
