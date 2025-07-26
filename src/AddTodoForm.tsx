import { CSSProperties, useState } from "react";
import { Button, Column, Row, TextInput } from "./components";
import { colors, spacing } from "./theme";
import { useDispatch } from "react-redux";
import { addTodo } from "./store";
import { TodoStatus } from "./types";

const $wrapperStyle: CSSProperties = {
  paddingLeft: spacing.lg,
  paddingBottom: spacing.lg,
};

const $buttonStyle: CSSProperties = {
  marginLeft: spacing.sm,
};

const $errorStyle: CSSProperties = {
  color: colors.error,
  padding: spacing.xs,
  fontSize: "13px",
};

export const AddTodoForm = function AddTodoForm() {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const onAddTodo = () => {
    if (!value.length) {
      setError("Please enter a todo title");
    } else {
      dispatch(
        addTodo({
          title: value,
          status: TodoStatus.NotStarted,
        })
      );
      setError("");
      setValue("");
    }
  };

  return (
    <Column style={$wrapperStyle}>
      <Row>
        <TextInput
          value={value}
          onChange={onChange}
          placeholder="Enter todo title"
        />
        <Button
          style={$buttonStyle}
          onClick={onAddTodo}
          variant="contained"
          icon="add"
        >
          Add Todo
        </Button>
      </Row>
      {error ? <p style={$errorStyle}>{error}</p> : null}
    </Column>
  );
};
