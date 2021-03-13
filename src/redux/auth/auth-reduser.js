import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import authActions from "./auth-action";
import authAction from "./auth-action";

const initialState = { name: null, email: null };

const user = createReducer(initialState, {
  [authActions.registerSuccess]: (_, { payload }) => payload.user,
  [authAction.loginSuccess]: (_, { payload }) => payload.user,
});

const token = createReducer(null, {
  [authActions.registerSuccess]: (_, { payload }) => payload.token,
  [authAction.loginSuccess]: (_, { payload }) => payload.token,
});
const error = createReducer(null, {
  [authActions.registerError]: (_, { payload }) => payload,
  [authAction.loginError]: (_, { payload }) => payload,
});

export default {
  user,
  token,
  error,
};
