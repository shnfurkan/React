import { configureStore } from '@reduxjs/toolkit'
import formSlice from "../slices/FormSlice"
import movieSlice from "../slices/MovieSlice"
import thunk from 'redux-thunk';

// npm install redux-thunk

export const store = configureStore({
  reducer: {
    form: formSlice,
    movie: movieSlice
  },
  middleware: [thunk],
})
