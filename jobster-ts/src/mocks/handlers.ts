import { rest } from "msw";

export const handlers = [
  rest.get(
    "https://jobify-prod.herokuapp.com/api/v1/toolkit/auth/register",
    (req, res, ctx) => {
      return res(
        ctx.json({
          email: "testUser@test.com",
          lastName: "shake and bake",
          location: "vegan food truck",
          name: "sangbin",
          token: "eyJhbGciOiJIUzI1NiIsInR5cC",
        })
      );
    }
  ),
  rest.post(
    "https://jobify-prod.herokuapp.com/api/v1/toolkit/auth/login",
    (req, res, ctx) => {
      return res(
        ctx.json({
          user: {
            email: "testUser@test.com",
            lastName: "shake and bake",
            location: "vegan food truck",
            name: "sangbin",
            token: "eyJhbGciOiJIUzI1NiIsInR5cC",
          },
        })
      );
    }
  ),
];
