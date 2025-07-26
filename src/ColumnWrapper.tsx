import React from "react";
import type { CSSProperties, FC } from "react";
import { DroppableColumn, Row } from "./components";
import { spacing } from "./theme";

const $wrapperStyle: CSSProperties = {
  padding: spacing.lg,
  gap: spacing.lg,
};

export const ColumnWrapper: FC = function ColumnWrapper() {
  return (
    <Row style={$wrapperStyle}>
      <DroppableColumn title="Todo" />
      <DroppableColumn title="In Progress" />
      <DroppableColumn title="Done" />
    </Row>
  );
};
