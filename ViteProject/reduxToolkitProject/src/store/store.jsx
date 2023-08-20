import { configureStore } from '@reduxjs/toolkit'
import courseSlice from "../slices/courseSlice"
import formSlice from "../slices/formSlice"

export const store = configureStore({
  reducer: {
    form: formSlice,
    course: courseSlice
  },
})

