import userEvent from "@testing-library/user-event";
import NavLinks from "../../components/NavLinks";
import { render, screen } from "../../utils/test-utils";

describe("NavLinks Component", () => {
  it("탭 메뉴는 순서에 맞게 렌더링 된다.", () => {
    render(<NavLinks />);

    const stats = screen.getAllByRole("link");

    expect(stats[0]).toHaveTextContent(/stats/i);
    expect(stats[1]).toHaveTextContent(/all jobs/i);
    expect(stats[2]).toHaveTextContent(/add job/i);
    expect(stats[3]).toHaveTextContent(/profile/i);
  });

  it("탭 메뉴를 클릭하면 'active' 클래스가 생성된다.", () => {
    render(<NavLinks />);

    const stats = screen.getAllByRole("link");

    expect(stats[1]).toHaveClass("nav-link");
    userEvent.click(stats[1]);
    expect(stats[1]).toHaveClass("nav-link active");
  });
});
