import { findByRole, screen, waitFor } from "@testing-library/react";
import { Navbar } from "../../components";
import { render } from "../../utils/test-utils";
import userEvent from "@testing-library/user-event";
import setupStore from "../../store/store";
import { loginUser } from "../../actions/user";

describe("Navbar Component", () => {
  it("user의 이름에 맞게 button의 텍스트가 변경된다.", () => {
    const state = {
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

    render(<Navbar />, {
      preloadedState: state,
    });
    
    const button = screen.getByTestId("user-button");
    expect(button).toHaveTextContent("sangbin");
  });

  it("user버튼을 클릭하면 logout 드랍다운이 나타난다.", () => {
    render(<Navbar />);
    const dropdown = screen.getByTestId("drop-down");
    const userBtn = screen.getByTestId("user-button");

    expect(dropdown).toHaveStyle("visibility: hidden");

    userEvent.click(userBtn);

    expect(dropdown).not.toHaveStyle("visibility: hidden");
  });

  it("user버튼을 클릭하면 className='show-dropdown' 이 토글 된다.", () => {
    render(<Navbar />);
    const dropdown = screen.getByTestId("drop-down");
    const userBtn = screen.getByTestId("user-button");

    expect(dropdown).not.toHaveClass("show-dropdown");

    userEvent.click(userBtn);

    expect(dropdown).toHaveClass("dropdown show-dropdown");
  });
});
