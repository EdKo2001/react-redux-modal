import { configureStore } from "@reduxjs/toolkit";

import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

import logger from "redux-logger";
import thunk from "redux-thunk";

import flyingModalReducer from "../features/flyingModal/flyingModalSlice";

const store = configureStore({
  reducer: {
    flyingModal: flyingModalReducer,
  },
  middleware: [thunk, logger],
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type TypedDispatch = ThunkDispatch<RootState, any, AnyAction>;
