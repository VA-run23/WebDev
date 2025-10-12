//reducers
import { createSlice, nanoid } from "@reduxjs/toolkit";

//slice is a bundle of REDUCERS AND ACTIONS

const initialState = {
  todos: [
    {
      id: "abc",
      task: "demo_task",
      isDone: false,
    },
  ],
};
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        task: action.payload,
        isDone: false,
      };
      state.todos.push(newTodo); ////direct mutation
    },
    deleteTodo: (state, action) => {
      // action.payload
      state.todos = state.todos.filter((todo) => todo.id != action.payload);
    },
    markAsDone: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, isDone: true };
        }
        return todo;
      });
    },
  },
});

export const { addTodo, deleteTodo, markAsDone } = todoSlice.actions;
export default todoSlice.reducer;
