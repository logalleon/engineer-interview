import React from "react";
import type { CSSProperties, FC } from "react";
import { TodosColumn, Row } from "./components";
import { spacing } from "./theme";
import { TodoStatus } from "./types";
import { AddTodoForm } from "./AddTodoForm";

const $wrapperStyle: CSSProperties = {
  padding: spacing.lg,
  gap: spacing.lg,
};

export const ColumnWrapper: FC = function ColumnWrapper() {
  return (
    <>
      <Row style={$wrapperStyle}>
        <TodosColumn status={TodoStatus.NotStarted} title="Todo" />
        <TodosColumn status={TodoStatus.InProgress} title="In Progress" />
        <TodosColumn status={TodoStatus.Done} title="Done" />
      </Row>
      <AddTodoForm />
    </>
  );
};
