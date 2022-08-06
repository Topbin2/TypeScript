import { BigSidebar } from "../../components";
import { initialState } from "../../reducers/userSlice";
import { render, screen } from "../../utils/test-utils";

describe("BigSidebar Component", () => {
  it("렌더링", () => {
    render(<BigSidebar />);

    const sidebar = screen.getByTestId("sidebar");
    expect(sidebar).toBeInTheDocument();

    const img = screen.getByAltText("jobster logo");
    expect(img).toBeInTheDocument();

    const statsLink = screen.getByText(/stats/i);
    expect(statsLink).toBeInTheDocument();

    const allJobsLink = screen.getByText(/all jobs/i);
    expect(allJobsLink).toBeInTheDocument();
  });

  it("렌더링시 sidebar의 class는 'sidebar-container show-sidebar' 이다.", () => {
    render(<BigSidebar />, {
      preloadedState: { user: { ...initialState, isSidebarOpen: false } },
    });

    const sidebar = screen.getByTestId("sidebar");
    expect(sidebar).toHaveClass("sidebar-container show-sidebar");
  });

  it("isSidebar의 상태가 true이면 sidebar의 'show-sidebar' class가 사라진다.", () => {
    render(<BigSidebar />, {
      preloadedState: { user: { ...initialState, isSidebarOpen: true } },
    });

    const sidebar = screen.getByTestId("sidebar");
    expect(sidebar).toHaveClass("sidebar-container");
  });
});
