import { createSelector } from "reselect";
const selectUser = (state) => state.user;
const slectCart = (state) => state.cart;
export const selectCurrentUser = createSelector(
  [selectUser, slectCart],
  (user) => user.currentUser
);
