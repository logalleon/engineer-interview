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
      const nextFrom = [...state.todos[action.payload.from]];
      const [todo] = nextFrom.splice(action.payload.index);
      const nextTo = [
        ...state.todos[action.payload.to],
        { ...todo, status: action.payload.to },
      ];
      console.log(nextFrom, nextTo);
      console.log({ nextFrom, nextTo, todo });
      state.todos[action.payload.from] = nextFrom;
      state.todos[action.payload.to] = nextTo;
    },
  },
});

export const { addTodo, moveTodo } = todosSlice.actions;
