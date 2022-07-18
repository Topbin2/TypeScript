import axios from "axios";

const customFetch = axios.create({
  baseURL: "https://jobify-prod.herokuapp.com/api/v1/toolkit",
});

type AuthHeader = (thunkAPI: any) => { headers: { authorization: string } };

export const authHeader: AuthHeader = (thunkAPI) => {
  return {
    headers: {
      authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
    },
  };
};

export default customFetch;
