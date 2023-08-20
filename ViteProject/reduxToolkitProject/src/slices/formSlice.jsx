import { createSlice } from '@reduxjs/toolkit'

export const formSlice = createSlice({
    name: 'form',
    initialState: {
        baslik:"",
        aciklama:"",
        fiyat:0,
    },
    reducers: {
        changeTitle: (state,action) => {
            state.baslik = action.payload
        },
        changeDefinition: (state,action) => {
            state.aciklama = action.payload
        },
        changeCost: (state,action) => {
            state.fiyat = action.payload
        },
    },
})

export default formSlice.reducer
export const { changeTitle,changeDefinition,changeCost } = formSlice.actions

