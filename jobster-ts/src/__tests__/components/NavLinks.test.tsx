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

    expect(stats[0]).toHaveClass("nav-link");
    userEvent.click(stats[0]);
    expect(stats[0]).toHaveClass("nav-link active");

    expect(stats[1]).toHaveClass("nav-link");
    userEvent.click(stats[1]);
    expect(stats[1]).toHaveClass("nav-link active");

    expect(stats[2]).toHaveClass("nav-link");
    userEvent.click(stats[2]);
    expect(stats[2]).toHaveClass("nav-link active");

    expect(stats[3]).toHaveClass("nav-link");
    userEvent.click(stats[3]);
    expect(stats[3]).toHaveClass("nav-link active");
  });

  it("stats 메뉴는 '/' 로 연결된다.", () => {
    render(<NavLinks />);
    const stats = screen.getAllByRole("link")[0];
    expect(stats).toHaveAttribute("href", "/");
  });

  it("all jobs 메뉴는 '/all-jobs' 로 연결된다.", () => {
    render(<NavLinks />);
    const allJobs = screen.getAllByRole("link")[1];
    expect(allJobs).toHaveAttribute("href", "/all-jobs");
  });

  it("add job 메뉴는 'add-job' 로 연결된다.", () => {
    render(<NavLinks />);
    const addJob = screen.getAllByRole("link")[2];
    expect(addJob).toHaveAttribute("href", "/add-job");
  });

  it("profile 메뉴는 'profile' 로 연결된다.", () => {
    render(<NavLinks />);
    const profile = screen.getAllByRole("link")[3];
    expect(profile).toHaveAttribute("href", "/profile");
  });
});
