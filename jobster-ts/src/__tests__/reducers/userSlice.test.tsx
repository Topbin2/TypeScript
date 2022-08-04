import { IUserState } from "../../interfaces";
import {
  userReducer,
  toggleSidebar,
  logoutUser,
  initialState,
} from "../../reducers/userSlice";

test("initial state를 리턴한다.", () => {
  expect(userReducer(undefined, { type: undefined })).toEqual({
    isLoading: false,
    isSidebarOpen: false,
    user: null,
  });
});

test("toggleSidebar action은 isSidebarOpen 상태를 토글 한다.", () => {
  expect(userReducer(initialState, toggleSidebar())).toEqual({
    isLoading: false,
    isSidebarOpen: true,
    user: null,
  });
});

test("logoutUser action", () => {
  const previousState: IUserState = {
    isLoading: false,
    isSidebarOpen: true,
    user: {
      email: "sangbin@gmail.com",
      lastName: "sangbin",
      location: "seoul",
      name: "sangbin",
      token: "some token",
    },
  };
  expect(userReducer(previousState, logoutUser())).toEqual({
    isLoading: false,
    isSidebarOpen: false,
    user: null,
  });
});
