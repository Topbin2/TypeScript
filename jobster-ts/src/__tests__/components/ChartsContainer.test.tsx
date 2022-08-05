import { ChartsContainer } from "../../components";
import { initialState } from "../../reducers/allJobsSlice";
import { render, screen } from "../../utils/test-utils";

test("렌더링 시 button의 텍스트는 'Area Chart' 이다.", () => {
  const state = {
    ...initialState,
    monthlyApplications: [{ date: "Jul 2021", count: 1 }],
  };
  render(<ChartsContainer />, { preloadedState: { allJobs: state } });

  const button = screen.getByRole("button");
  expect(button).toHaveTextContent(/Area Chart/i);
});
