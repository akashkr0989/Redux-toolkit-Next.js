import {
  createSlice,
  nanoid,
  current,
  createAsyncThunk
} from "@reduxjs/toolkit";

const initialState = {
  userAPIData: [] as any,
  users: [] as any
};

export const fetchApiUsers = createAsyncThunk("apiUsers", async () => {
  console.log("action")
  const result = await fetch("https://jsonplaceholder.typicode.com/users");
  return result.json();
});

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
      localStorage.setItem(
        "users",
        JSON.stringify(current(state.users) as any)
      );
      console.log(current(state.users));
    },
    removeUser: (state, action) => {
      console.log(action);
      const data = state.users.filter((item: any) => {
        return item.id !== action.payload;
      });
      state.users = data;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchApiUsers.fulfilled, (state: any, action: any) => {
      console.log(action)
      return (state.isloading = false), (state.userAPIData = action.payload);
    });
  }
  // extraReducers: {
  //   [fetchApiUsers.fulfilled.type]: (state, action) => {
  //     state.users = action.payload;
  //   }
  // }
});

export const { addUser, removeUser } = Slice.actions;
export default Slice.reducer;
