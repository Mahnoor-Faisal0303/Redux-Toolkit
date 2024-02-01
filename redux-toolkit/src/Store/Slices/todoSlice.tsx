import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import uuid from 'react-uuid';


interface TodoState {
    todoList: { id: string; name: string }[];
}

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todoList: [],
    },
    reducers: {
        addTodo: (state: TodoState, action: PayloadAction<string>) => {
            state.todoList = [...state.todoList, { id: uuid(), name: action.payload }];
        },
        deleteTodo: (state: TodoState, action: PayloadAction<string>) => {
            state.todoList = state.todoList.filter((item) => item.id !== action.payload);
        },
    },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;


