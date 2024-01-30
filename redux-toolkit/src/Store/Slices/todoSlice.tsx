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
    },
    reducers: {
        // addTodo: (state: TodoState, action: PayloadAction<string>) => {
        //     state.todoList.push({ id: state.nextId, name: action.payload });
        //     state.nextId++;
        // },
        addTodo: (state: TodoState, action: PayloadAction<string>) => {
            state.todoList = [...state.todoList, { id: state.nextId, name: action.payload }];
            state.nextId++;
            console.log(state.nextId);
        },
        deleteTodo: (state: TodoState, action: PayloadAction<number>) => {
            state.todoList = state.todoList.filter((item) => item.id !== action.payload);
        },

        editTodo: () => {
            

        }
    },
});

export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;


