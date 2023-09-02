import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  title: "",
  definition: "",
  cost: 0,
}

export const FormSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    titleChange: (state,actions) => {
        state.title = actions.payload
    },
    definitonChange: (state,actions) => {
        state.definition = actions.payload
    },
    costChange: (state,actions) => {
        state.cost = actions.payload
    }
  },
})

export const {titleChange, definitonChange, costChange} = FormSlice.actions

export default FormSlice.reducer


