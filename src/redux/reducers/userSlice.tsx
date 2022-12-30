import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppStore, User } from "../../types";

const initialState: User = {
  uid: "",
  displayName: "",
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.uid = action.payload.uid;
      state.displayName = action.payload.displayName;
    },
    removeUser: (state) => {
      state.uid = "";
      state.displayName = "";
    }
  }
});

export const { setUser, removeUser } = userSlice.actions;
export const selectUser = (state: AppStore) => state.user;
export default userSlice.reducer;