import { createSlice } from "@reduxjs/toolkit";
import { Todo, TodoStatus } from "../../types";
export type TodosState = {
  todos: Record<TodoStatus, Todo[]>;
};

const initialState: TodosState = {
  todos: {
    [TodoStatus.NotStarted]: [],
    [TodoStatus.InProgress]: [],
    [TodoStatus.Done]: [],
  },
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: { payload: Todo }) => {
      const nextTodos = [
        ...state.todos[action.payload.status],
        { ...action.payload },
      ];
      state.todos[action.payload.status] = nextTodos;
    },
    moveTodo: (
      state,
      action: { payload: { index: number; from: TodoStatus; to: TodoStatus } }
    ) => {
      const { from, to, index } = action.payload;
      const [nextTodo] = state.todos[from].splice(index, 1);
      state.todos[to].push({
        ...nextTodo,
        status: to,
      });
    },
  },
});

export const { addTodo, moveTodo } = todosSlice.actions;
