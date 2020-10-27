import { REGISTER_SUCCESS, REGISTER_FAILURE } from "../actions/types";

const initialState = {
  auth_token: localStorage.getItem("auth_token"),
  isAuthenticated: null,
  loading: true,
  user: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_SUCCESS:
      localStorage.setItem("auth_token", payload.auth_token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
        // user: payload,
      };
    case REGISTER_FAILURE:
      localStorage.removeItem("auth_token");
      return {
        ...state,
        auth_token: null,
        isAuthenticated: false,
        loading: false,
      };
    default:
      return state;
  }
}
