import { rest } from "msw";

export const handlers = [

  rest.post(
    "https://jobify-prod.herokuapp.com/api/v1/toolkit/auth/register",
    (req, res, ctx) => {
      return res(
        ctx.json({
          user: {
            email: "mosangbin@gmai1l.com",
            lastName: "lastName",
            location: "my city",
            name: "모상빈",
            token: "eyJhbGciOiJIUzI1NiIsInR",
          },
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
  
  rest.patch(
    "https://jobify-prod.herokuapp.com/api/v1/toolkit/auth/updateUser",
    (req, res, ctx) => {
      return res(
        ctx.json({
          user: {
            name: "상빈",
            email: "sangbin@naver.com",
            lastName: "상빈",
            location: "japan",
          },
        })
      );
    }
  ),
];
