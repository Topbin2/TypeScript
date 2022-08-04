import userEvent from "@testing-library/user-event";
import { BigSidebar } from "../../components";
import { render, screen } from "../../utils/test-utils";

describe("BigSidebar Component", () => {
  it("user가 있다면 'show sidebar' className이 추가된다.", () => {
    render(<BigSidebar />);

    const sidebar = screen.getByTestId("sidebar");
    expect(sidebar).toHaveClass("show-sidebar");

    const img = screen.getByAltText("jobster logo");
    expect(img).toBeInTheDocument();

    const statsLink = screen.getByText(/stats/i);
    expect(statsLink).toBeInTheDocument();

    const allJobsLink = screen.getByText(/all jobs/i);
    expect(allJobsLink).toBeInTheDocument();
  });
});
