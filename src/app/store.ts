import { configureStore } from "@reduxjs/toolkit";

import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

import logger from "redux-logger";
import thunk from "redux-thunk";

import flyingFormReducer from "../features/flyingForm/flyingFormSlice";

const store = configureStore({
  reducer: {
    flyingForm: flyingFormReducer,
  },
  middleware: [thunk, logger],
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type TypedDispatch = ThunkDispatch<RootState, any, AnyAction>;
