import { configureStore } from "@reduxjs/toolkit";
import phonebookReducer from "./phonebook/phonebook-reducer";
import authReducers from "./auth/auth-reduser";

const store = configureStore({
  reducer: {
    auth: authReducers,
    phonebook: phonebookReducer,
  },
  devTools: process.env.NODE_ENV === "development",
});

export default store;
