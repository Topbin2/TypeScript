import { loginUser, registerUser, updateUser } from "../../actions/user";
import setupStore from "../../store/store";

test("registerUser action test", async () => {
  const store = setupStore();
  const result = await store.dispatch(
    registerUser({ email: "mosangbin@gmai1l.com", password: "123" })
  );
  const response = result.payload;

  expect(response).toEqual({
    user: {
      email: "mosangbin@gmai1l.com",
      lastName: "lastName",
      location: "my city",
      name: "모상빈",
      token: "eyJhbGciOiJIUzI1NiIsInR",
    },
  });

  const state = store.getState().user;
  expect(state.user?.name).toBe("모상빈");
});

test("loginUser action test", async () => {
  const store = setupStore();
  const result = await store.dispatch(
    loginUser({ email: "sangbin@gmail.com", password: "123" })
  );
  const response = result.payload;
  expect(response).toEqual({
    user: {
      email: "testUser@test.com",
      lastName: "shake and bake",
      location: "vegan food truck",
      name: "sangbin",
      token: "eyJhbGciOiJIUzI1NiIsInR5cC",
    },
  });

  const state = store.getState().user;
  expect(state.user?.name).toBe("sangbin");
});

test("updateUser action은 user 상태를 업데이트 한다.", async () => {
  const store = setupStore();
  const result = await store.dispatch(
    updateUser({
      name: "상빈",
      email: "sangbin@naver.com",
      lastName: "상빈",
      location: "japan",
    })
  );
  expect(result.payload).toEqual({
    user: {
      name: "상빈",
      email: "sangbin@naver.com",
      lastName: "상빈",
      location: "japan",
    },
  });
});
