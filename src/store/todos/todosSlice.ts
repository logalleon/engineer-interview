import { createSlice } from "@reduxjs/toolkit";
import { Todos } from "../../types";
export type TodosState = {
  todos: Todos[];
};

const initialState: TodosState = {
  todos: [],
};

export type TodoActions = {
  addTodo: (todo: Todos) => void;
  removeTodo: (id: string) => void;
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
});
