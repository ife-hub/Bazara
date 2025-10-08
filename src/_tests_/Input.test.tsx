// Input.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from "@/components/Input";

describe("Input component", () => {
  it("renders without crashing", () => {
    render(<Input />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
  });

  it("renders label if provided", () => {
    render(<Input label="Username" />);
    const labelElement = screen.getByText("Username");
    expect(labelElement).toBeInTheDocument();
  });

  it("renders error message if provided", () => {
    render(<Input error="Required field" />);
    const errorElement = screen.getByText("Required field");
    expect(errorElement).toBeInTheDocument();
  });

  it("applies red border class when error exists", () => {
    render(<Input error="Invalid input" />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toHaveClass("border-red-500");
  });

  it("applies gray border class when no error", () => {
    render(<Input />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toHaveClass("border-gray-300");
  });

  it("accepts user input", async () => {
    const user = userEvent.setup();
    render(<Input />);
    const inputElement = screen.getByRole("textbox");
    await user.type(inputElement, "Hello");
    expect(inputElement).toHaveValue("Hello");
  });
});