import { render, screen, fireEvent } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("test in AddCategory", () => {
  test("should change the textbox", () => {
    render(<AddCategory onNewCategory={() => {}} />);
    const input = screen.getByRole("textbox");
    fireEvent.input(input, { target: { value: "saint seiya" } });
    expect(input.value).toBe("saint seiya");
  });

  test("should call onNewCategory if input have a value", () => {
    const inputValue = "saint seiya";
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);

    const input = screen.getByRole("textbox");
    const form = screen.getAllByRole("form");

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(input);

    expect(input.value).toBe('');
    expect(onNewCategory).toHaveBeenCalled();
    expect (onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenLastCalledWith(inputValue);
  });

  test('should not call onNewCategory if input value is empty', () => {
    const onNewCategory = jest.fn();
    render(<AddCategory onNewCategory={onNewCategory} />);

    const form = screen.getAllByRole("form");
    const input = screen.getByRole("textbox");
    fireEvent.submit(input);

    expect(onNewCategory).toHaveBeenCalledTimes(0);
    expect(onNewCategory).not.toHaveBeenCalled();

  })
});
