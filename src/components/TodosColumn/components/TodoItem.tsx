import type { FC, CSSProperties } from "react";
import { Todo, TodoStatus } from "../../../types";
import { Row } from "../../Row";
import { Button } from "../../Button";
import { useDispatch } from "react-redux";
import { colors, spacing } from "../../../theme";
import { moveTodo } from "../../../store";
import { TodoOrder } from "../../../constants";

const $wrapperStyle: CSSProperties = {
  border: `1px solid ${colors.outline}`,
  marginLeft: spacing.md,
  marginRight: spacing.md,
  borderRadius: spacing.sm,
  marginBottom: spacing.md,
};

const $titleStyle: CSSProperties = {
  fontSize: "13px",
  fontWeight: "bold",
  flex: 1,
  paddingLeft: spacing.sm,
  paddingRight: spacing.sm,
};
type TodoItemProps = Todo & { index: number };

export const TodoItem: FC<TodoItemProps> = function TodoItem({
  status,
  title,
  index,
}) {
  const dispatch = useDispatch();
  const handleMove = (direction: "left" | "right") => () => {
    const to = TodoOrder[direction === "left" ? status - 1 : status + 1];
    dispatch(
      moveTodo({
        index,
        from: status,
        to,
      })
    );
  };
  return (
    <Row style={$wrapperStyle}>
      <Button
        variant="contained"
        onClick={handleMove("left")}
        disabled={status === TodoStatus.NotStarted}
        icon="arrow_left"
      />
      <p style={$titleStyle}>{title}</p>
      <Button
        variant="contained"
        onClick={handleMove("right")}
        disabled={status === TodoStatus.Done}
        icon="arrow_right"
      />
    </Row>
  );
};
