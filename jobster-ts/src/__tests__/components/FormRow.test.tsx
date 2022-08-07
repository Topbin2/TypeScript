import userEvent from "@testing-library/user-event";
import { FormRow } from "../../components";
import { render, screen } from "../../utils/test-utils";

describe("FormRow Component", () => {
  it("prop에 맞게 렌더링 된다.", () => {
    const fn = jest.fn();

    render(
      <FormRow
        type="text"
        name="position"
        value={undefined}
        handleChange={fn}
      />
    );

    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();

    expect(input).toHaveAttribute("id", "position");
    expect(input).toHaveAttribute("type", "text");
    expect(input).toHaveAttribute("name", "position");
    expect(input).toHaveValue("");

    userEvent.type(input, "sangbin");
    expect(fn).toBeCalledTimes(7);

    userEvent.click(input);
    expect(input).toHaveStyle("border: 2px inset");
  });
});
