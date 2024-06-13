import {
  createSlice,
  nanoid,
  current,
  createAsyncThunk
} from "@reduxjs/toolkit";

const initialState = {
  userAPIData: [] as any,
  users: [] as any,
  isloading: false,
  error: null as string | null,
};

export const fetchApiUsers = createAsyncThunk("apiUsers", async () => {
  console.log("API called action")
  const result = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!result.ok) {
    throw new Error('Failed to fetch users');
  }
  return result.json() as any;
});


const Slice = createSlice({
  name: "addUserSlice",
  initialState,
  reducers: {
    addUser: (state, action) => {
      console.log(action, 'Add USER');
      const data = {
        id: nanoid(),
        name: action.payload
      };
      state.users.push(data);
      localStorage.setItem(
        "users",
        JSON.stringify(current(state.users) as any)
      );
      // console.log(current(state.users));
    },
    removeUser: (state, action) => {
      console.log(action, "Remove User");
      const data = state.users.filter((item: any) => {
        return item.id !== action.payload;
      });
      state.users = data;
    }
  },
  // extraReducers: (builder) => {
  //   builder.addCase(fetchApiUsers.fulfilled, (state: any, action: any) => {
  //     console.log(action)
  //     return (state.isloading = false), (state.userAPIData = action.payload);
  //   });
  // }
  extraReducers: (builder) => {
    builder
      .addCase(fetchApiUsers.pending, (state) => {
        state.isloading = true;
        state.error = null;
      })
      .addCase(fetchApiUsers.fulfilled, (state, action) => {
        console.log(action, "reducer")
        state.isloading = false;
        state.userAPIData = action.payload;
      })
      .addCase(fetchApiUsers.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.error.message || 'Failed to fetch users';
      });
  },

});

export const { addUser, removeUser } = Slice.actions;
export default Slice.reducer;
