import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import locationsReducer from "../reducers/location";
import weathersReducer from "../reducers/weather";

export const store = configureStore({
  reducer: {
    locations: locationsReducer,
    weathers: weathersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
