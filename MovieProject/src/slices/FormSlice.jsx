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
  reducers: {},
})
export const {} = FormSlice.actions

export default FormSlice.reducer

