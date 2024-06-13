import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    toDos: [] as any
};

const Slice = createSlice({
    name: 'toDoList',
    initialState,
    reducers: {
        addToDos: (state, action) => {
             const data = {
                 id: nanoid(),
                 name: action.payload
             }
             state.toDos.push(data);
        }

    }
})

export const { addToDos } = Slice.actions;
export default Slice.reducer;