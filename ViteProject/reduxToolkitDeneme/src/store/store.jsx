import { configureStore } from '@reduxjs/toolkit'
import formSlice from "../slices/FormSlice"
import courseSlice from "../slices/CourseSlice"

export const store = configureStore({
  reducer: {
    form:formSlice,
    courses:courseSlice,
  },
})

