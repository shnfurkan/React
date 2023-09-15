import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  movieName: "",
  movieYear: "",
  movieType: "",
  moviePoint: "",
  movieImage: null,
}

export const FormSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    nameChange: (state,actions) => {
      state.movieName = actions.payload
    },
    yearChange: (state,actions) => {
      state.movieYear = actions.payload
    },
    typeChange: (state,actions) => {
      state.movieType = actions.payload
    },
    pointChange: (state,actions) => {
      state.moviePoint = actions.payload
    },
    updatePhoto: (state,actions) => {
      state.movieImage = actions.payload;
    },
  },
})
export const {nameChange, yearChange, typeChange, pointChange,updatePhoto} = FormSlice.actions

export default FormSlice.reducer
