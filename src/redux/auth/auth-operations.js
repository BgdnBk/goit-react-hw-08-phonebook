import axios from "axios";
import authActions from "./auth-action";

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Autorization = `Bearer ${token}`;
  },
  unseet() {
    axios.defaults.headers.common.Autorization = "";
  },
};
//  /users/signup
const register = (credential) => async (dispatch) => {
  dispatch(authActions.registerRequest());

  try {
    const response = await axios.post("/users/signup", credential);
    console.log("response.data", response.data);
    dispatch(authActions.registerSuccess(response.data));
  } catch (error) {
    dispatch(authActions.registerError(error.message));
  }
};
// /users/login
const login = (credential) => async (dispatch) => {
  dispatch(authActions.loginRequest());

  try {
    const response = await axios.post("/users/login", credential);
    console.log("response.data", response.data);
    dispatch(authActions.loginSuccess(response.data));
  } catch (error) {
    dispatch(authActions.loginError(error.message));
  }
};

const logout = (credential) => (dispatch) => {};

const getCurrentUser = () => (dispatch, getState) => {};

export default { register, login, logout, getCurrentUser };
