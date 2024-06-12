import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./slice";
import toDosReducer from "./toDoSlice";

export const store = configureStore({
  reducer: {
    toDosData: toDosReducer,
    usersData: usersReducer,
  }
});

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;