import userEvent from "@testing-library/user-event";
import { ChartsContainer } from "../../components";
import { render, screen } from "../../utils/test-utils";

test("렌더링 시 button의 텍스트는 'Area Chart' 이다.", () => {
  render(<ChartsContainer />);

  const button = screen.getByRole("button");
  expect(button).toHaveTextContent(/Area Chart/i);
});

test("'Area Chart' 버튼을 클릭하면 텍스트가 'Bar Chart'로 변경된다.", () => {
  render(<ChartsContainer />);
  const button = screen.getByRole("button");
  userEvent.click(button);
  expect(button).toHaveTextContent("Bar Chart");
});
