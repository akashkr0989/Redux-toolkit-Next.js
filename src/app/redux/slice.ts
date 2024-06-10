import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  users: [] as any
};

const Slice = createSlice({
  name: "addUserSlice",
  initialState,
  reducers: {
    addUser: (state, action) => {
      console.log(action);
      const data = {
        id: nanoid(),
        name: action.payload
      };
      state.users.push(data);
    },
    removeUser: (state, action) => {
      console.log(action);
      const data = state.users.filter((item: any) => {
        return item.id !== action.payload;
      });
      state.users = data;
    }
  }
});

export const { addUser, removeUser } = Slice.actions;
export default Slice.reducer;
