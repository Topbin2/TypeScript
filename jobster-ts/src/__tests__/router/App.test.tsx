import App from "../../App";
import { render, screen } from "../../utils/test-utils";

let state: object;

beforeEach(() => {
  state = {
    user: {
      isLoading: false,
      isSidebarOpen: false,
      user: {
        email: "asd",
        lastName: "asd",
        location: "asd",
        name: "sangbin",
        token: "asdasd",
      },
    },
  };
});

test("'/' 렌더링시 user가 없다면 '/landing' 페이지로 리다이렉트 된다.", () => {
  render(<App />);
  expect(screen.getByText(/tracking/i)).toBeInTheDocument();
});

test("'/' 페이지 테스트", () => {
  render(<App />, { preloadedState: state, route: "/" });
  expect(screen.getByText(/pending applications/i)).toBeInTheDocument();
});

test("'/landing' 페이지 테스트", () => {
  render(<App />, { preloadedState: state, route: "/landing" });
  expect(screen.getByText(/tracking/i)).toBeInTheDocument();
});

test("'/register' 페이지 테스트", () => {
  render(<App />, { preloadedState: state, route: "/register" });
  expect(screen.getByText(/login/i)).toBeInTheDocument();
});

test("'/profile' 페이지 테스트", () => {
  render(<App />, { preloadedState: state, route: "/profile" });
  const text = screen.getByText(/save changes/i);
  expect(text).toBeInTheDocument();
});

test("'/all-jobs' 페이지 테스트", () => {
  render(<App />, { preloadedState: state, route: "/all-jobs" });
  expect(screen.getByText(/clear filters/i)).toBeInTheDocument();
});

test("'/add-job' 페이지 테스트", () => {
  render(<App />, { preloadedState: state, route: "/add-job" });
  expect(screen.getByText("position")).toBeInTheDocument();
});

test("잘못된 경로 테스트", () => {
  render(<App />, { route: "error" });
  expect(screen.getByText(/page not found/i)).toBeInTheDocument();
});
