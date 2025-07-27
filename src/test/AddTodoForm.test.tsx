import { render } from "@testing-library/react";
import { AddTodoForm } from "../AddTodoForm";
import userEvent from "@testing-library/user-event";

jest.mock("react-redux", () => ({
  useDispatch: () => jest.fn(),
}));

describe("AddTodoForm", () => {
  it("renders an error message when there is no input", async () => {
    const { findByTestId } = render(<AddTodoForm />);
    const input = await findByTestId("add-todo-input");
    const button = await findByTestId("add-todo-button");
    await userEvent.click(button);

    expect(input.textContent).toBe("");
    const errorMessage = await findByTestId("add-form-error");
    expect(errorMessage.textContent).toBe("Please enter a todo title");
  });
});
