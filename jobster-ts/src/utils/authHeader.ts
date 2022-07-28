type AuthHeader = (thunkAPI: any) => { headers: { authorization: string } };

export const authHeader: AuthHeader = (thunkAPI) => {
  return {
    headers: {
      authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
    },
  };
};
