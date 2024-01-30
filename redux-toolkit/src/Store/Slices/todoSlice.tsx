import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TodoState {
  todoList: { id: number; name: string }[];
  nextId: number;
}

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todoList: [],
    nextId: 1,
  } as TodoState,
  reducers: {
    addTodo: (state: TodoState, action: PayloadAction<string>) => {
      state.todoList.push({ id: state.nextId, name: action.payload });
      state.nextId++;
    },
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
