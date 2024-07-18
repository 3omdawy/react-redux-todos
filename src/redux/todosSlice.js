import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
    name: 'todos_reducer',
    initialState: {
        todos: [
            { task: "Eat", id: 1 },
            { task: "Sleep", id: 2 },
            { task: "Go Home", id: 3 },
        ],
        id: 3
    },
    reducers: {
        addTodo: (state, action) => {
            let newState = { ...state };
            newState.id++;
            newState.todos = [...newState.todos, { task: action.payload.task, id: newState.id }]
            return newState;
        },
        removeTodo: (state, action) => {
            let newState = { ...state };
            newState.todos = newState.todos.filter(item => item.id !== action.payload.id);
            return newState;
        },
    },
});

export const { addTodo, removeTodo } = todosSlice.actions;
export default todosSlice.reducer;
