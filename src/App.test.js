import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

it("should add a new todo", () => {
  const { debug, getByLabelText, getByText } = render(<App />);
  const inputField = getByLabelText("input-label");
  fireEvent.change(inputField, {
    target: {
      value: "Tested todo"
    }
  });
  expect(inputField.value).toContain("Tested todo");

  const btn = getByText(/add a todo/i);
  fireEvent.click(btn);
  debug();
});
