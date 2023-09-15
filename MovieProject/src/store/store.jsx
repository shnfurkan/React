import { configureStore } from '@reduxjs/toolkit'
import formSlice from "../slices/FormSlice"
import movieSlice from "../slices/MovieSlice"

export const store = configureStore({
  reducer: {
    form: formSlice,
    movie: movieSlice
  },
})
