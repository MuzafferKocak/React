import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: { email: "", password: "" },
};

const loginSlice = createSlice({
  name: "login", //? action type
  initialState,
  //? reducer
  reducers: {
    //? action creator func.
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = { email: "", password: "" };
    },
  },
});

//?Die resultierenden Action funktions werden destrukturiert und aus SliceName.actions exportiert.
export const { setUser, clearUser } = loginSlice.actions;

//? Der geschriebene Slice im Reducer sollte als SliceName.reducer exportiert.
export default loginSlice.reducer;
