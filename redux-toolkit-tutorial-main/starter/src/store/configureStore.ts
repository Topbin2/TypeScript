import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../reducers/cart/cartSlice";
import modalReducer from "../reducers/modal/modalSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
