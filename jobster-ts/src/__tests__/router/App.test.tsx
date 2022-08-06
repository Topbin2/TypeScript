import App from "../../App";
import { renderWithRouter, screen } from "../../utils/test-utils";

test("'/' 렌더링 테스트", () => {
  renderWithRouter(<App />);

  expect(screen.getByText(/monthly applications/i)).toBeInTheDocument();
});
