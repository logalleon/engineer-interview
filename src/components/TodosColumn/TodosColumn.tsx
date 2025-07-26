import type { CSSProperties, FC } from "react";
import { Column } from "../Column";
import { colors, spacing } from "../../theme";
import { TodoStatus } from "../../types";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { Todo } from "../../types";
import { TodoItem } from "./components";

const $columnStyle: CSSProperties = {
  flex: 1,
  border: `1px solid ${colors.outline}`,
  borderRadius: spacing.lg,
  minHeight: "400px",
  height: "400px",
  overflowY: "scroll",
};

const $titleStyle: CSSProperties = {
  fontSize: "1.25rem",
  textAlign: "center",
  color: colors.textPrimary,
  marginBottom: spacing.md,
};

type TodosColumnProps = {
  title: string;
  status: TodoStatus;
};

export const TodosColumn: FC<TodosColumnProps> = function TodosColumn({
  title,
  status,
}) {
  const todos = useSelector((state: RootState) => state.todos[status]);
  return (
    <Column style={$columnStyle}>
      <h2 style={$titleStyle}>{title}</h2>
      {todos.map((todo: Todo, index: number) => (
        // Yeah, I know, you shouldn't use an index as the key
        <TodoItem {...todo} key={index} index={index} />
      ))}
    </Column>
  );
};
