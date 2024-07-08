import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    getnowmovies: null,
  },
  reducers: {
    addnowplayingmovies: (state, action) => {
      state.getnowmovies = action.payload;
    },
  },
});

export default movieSlice.reducer;
export const { addnowplayingmovies } = movieSlice.actions;
