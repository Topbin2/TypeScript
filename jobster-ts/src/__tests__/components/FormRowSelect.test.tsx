import userEvent from "@testing-library/user-event";
import { FormRowSelect } from "../../components";
import { render, screen } from "../../utils/test-utils";

describe("FormRowSelect Component", () => {
  it("전달된 prop에 맞게 렌더링 된다.", () => {
    const fn = jest.fn();
    const list = ["pending", "declined", "interview"];

    render(
      <FormRowSelect
        labelText="status label"
        name="status"
        value=""
        handleChange={fn}
        list={list}
      />
    );

    const label = screen.getByLabelText("status label");
    expect(label).toBeInTheDocument();

    const select = screen.getByRole("combobox");
    expect(select).toBeInTheDocument();
    expect(select).toHaveAttribute("name", "status");
    expect(select).toHaveAttribute("id", "status");
    expect(select).toHaveClass("form-select");

    const options = screen.getAllByRole("option");
    expect(options[0]).toHaveTextContent("pending");
    expect(options[1]).toHaveTextContent("declined");
    expect(options[2]).toHaveTextContent("interview");

    expect((options[0] as HTMLOptionElement).selected).toBeTruthy();
    expect((options[1] as HTMLOptionElement).selected).toBeFalsy();
    expect((options[2] as HTMLOptionElement).selected).toBeFalsy();
  });
});
